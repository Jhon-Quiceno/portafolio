import { socials } from "@/lib/socials";
import { socialIconMap } from "@/components/icon-map";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 z-30 hidden w-full border-t border-white/10 bg-surface/40 backdrop-blur-xl md:block">
      <div className="mx-auto flex h-14 max-w-container items-center justify-between px-4 text-label-mono font-mono lg:px-gutter">
        <span className="text-on-surface-variant">© {year} Jhon Quiceno</span>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-[#7fd99a]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7fd99a]" />
            System Status: Optimal
          </span>

          {socials.map((social) => {
            const Icon = socialIconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 uppercase text-on-surface-variant transition-colors hover:text-primary"
              >
                <Icon size={14} />
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
