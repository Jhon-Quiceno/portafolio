export type ContributionDay = {
  date: string;
  count: number;
};

export type ContributionData = {
  totalContributions: number;
  days: ContributionDay[];
  isLive: boolean;
};

type GraphQLContributionDay = {
  contributionCount: number;
  date: string;
};

type GraphQLWeek = {
  contributionDays: GraphQLContributionDay[];
};

type GraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: GraphQLWeek[];
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const GITHUB_LOGIN = "Jhon-Quiceno";
const WIDGET_WEEKS = 15;
const WIDGET_DAYS = WIDGET_WEEKS * 7;

const QUERY = `
  query {
    user(login: "${GITHUB_LOGIN}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86_400_000);
}

/**
 * Deterministic placeholder grid used when GITHUB_TOKEN is missing or the
 * GitHub GraphQL call fails. Seeded off the calendar day-of-year so the
 * pattern is fixed and stable across renders/builds instead of looking
 * randomly broken.
 */
function seededFallback(): ContributionData {
  const today = new Date();
  const days: ContributionDay[] = [];

  for (let i = WIDGET_DAYS - 1; i >= 0; i -= 1) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const seed = (dayOfYear(date) * 37) % 10;
    const count = seed >= 7 ? 3 : seed >= 5 ? 2 : seed >= 3 ? 1 : 0;
    days.push({ date: date.toISOString().slice(0, 10), count });
  }

  return {
    totalContributions: days.reduce((sum, day) => sum + day.count, 0),
    days,
    isLive: false,
  };
}

/**
 * Fetches real GitHub contribution data for Jhon-Quiceno via the GraphQL
 * API. Falls back to a deterministic placeholder grid when GITHUB_TOKEN is
 * not configured or the request fails, so the widget never crashes or
 * renders empty.
 */
export async function getContributionData(): Promise<ContributionData> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return seededFallback();
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`GitHub GraphQL request failed: ${response.status}`);
    }

    const json: GraphQLResponse = await response.json();
    const calendar =
      json.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      throw new Error("Malformed GitHub GraphQL response");
    }

    const days: ContributionDay[] = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      }))
    );

    return {
      totalContributions: calendar.totalContributions,
      days: days.slice(-WIDGET_DAYS),
      isLive: true,
    };
  } catch {
    return seededFallback();
  }
}

export const CONTRIBUTION_WIDGET_WEEKS = WIDGET_WEEKS;
