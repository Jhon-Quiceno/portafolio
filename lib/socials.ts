export type SocialIcon = "github" | "linkedin";

export type Social = {
  name: string;
  href: string;
  icon: SocialIcon;
};

// Add more accounts here over time — each entry just needs a name, a URL,
// and a lucide-react icon key wired up in components/icon-map.tsx.
export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/Jhon-Quiceno", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jhon-quiceno",
    icon: "linkedin",
  },
];
