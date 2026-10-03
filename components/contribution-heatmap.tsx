import { getContributionData, CONTRIBUTION_WIDGET_WEEKS } from "@/lib/github";
import { ContributionGrid } from "@/components/contribution-grid";

/**
 * Home page, bottom-right: real GitHub contribution data for
 * Jhon-Quiceno, fetched server-side. Falls back to a deterministic
 * placeholder grid if GITHUB_TOKEN is missing or the API call fails.
 */
export async function ContributionHeatmap() {
  const data = await getContributionData();

  return (
    <div className="glass-card luminescent-border delay-3 animate-boot hidden w-64 rounded-card p-4 lg:block">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-label-caps font-mono uppercase text-on-surface-variant">
          Contribution_Map
        </p>
        <span className="text-label-mono font-mono text-primary">
          {data.totalContributions}
        </span>
      </div>
      <ContributionGrid days={data.days} weeks={CONTRIBUTION_WIDGET_WEEKS} />
      {!data.isLive && (
        <p className="mt-2 text-[10px] font-mono uppercase text-on-surface-variant/60">
          placeholder pattern
        </p>
      )}
    </div>
  );
}
