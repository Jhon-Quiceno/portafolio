import { ArrowRight, Globe, Rocket } from "lucide-react";
import { Button } from "@/components/button";
import { TiltCard } from "@/components/tilt-card";
import { StackWidget } from "@/components/stack-widget";
import { ContributionHeatmap } from "@/components/contribution-heatmap";

export default function HomePage() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 pb-28 lg:px-gutter">
      <section className="delay-1 animate-boot flex w-full max-w-4xl flex-col items-center text-center">
        <TiltCard className="glass-card luminescent-border relative w-full overflow-hidden rounded-card p-8 md:p-12">
          <span className="scan-line opacity-20" aria-hidden="true" />

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-label-mono font-mono text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7fd99a]" />
              SYSTEM: ACTIVE
            </span>
            <span className="flex items-center gap-2">
              <Globe size={14} aria-hidden="true" />
              LOCATION: COLOMBIA · REMOTE
            </span>
            <span className="flex items-center gap-2 text-primary">
              <Rocket size={14} aria-hidden="true" />
              AVAILABLE FOR HIGH-IMPACT PROJECTS
            </span>
          </div>

          <h1 className="font-sans text-display text-on-surface md:text-display-lg">
            JHON QUICENO
          </h1>
          <p className="mt-3 text-headline-md font-sans text-primary">
            Full-Stack Software Engineer
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-on-surface-variant">
            He builds end-to-end systems across web, mobile and backend —
            Java/Spring Boot services, TypeScript front-ends, Flutter mobile
            apps, and PHP/Laravel platforms — with growing work in data/ML
            tooling.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/projects"
              icon={<ArrowRight size={16} aria-hidden="true" />}
            >
              Initiate Project Explorer
            </Button>
            <Button href="/contact" variant="ghost">
              Establish Connection
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-[10px] font-mono uppercase text-on-surface-variant/70">
            <span>UPTIME: 99.98%</span>
            <span>ARCH: FULL-STACK</span>
            <span>BUILD: v1.0.0</span>
          </div>
        </TiltCard>
      </section>

      <div className="fixed bottom-20 left-6 z-20">
        <StackWidget />
      </div>
      <div className="fixed bottom-20 right-6 z-20">
        <ContributionHeatmap />
      </div>
    </main>
  );
}
