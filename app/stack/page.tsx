import type { Metadata } from "next";
import { stackCategories } from "@/lib/stack";
import { stackIconMap } from "@/components/icon-map";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Stack — Jhon Quiceno",
  description: "The technologies Jhon Quiceno builds with, by category.",
};

export default function StackPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-container px-4 pt-28 pb-24 lg:px-gutter">
      <Reveal>
        <p className="text-label-caps font-mono uppercase text-primary">
          Stack
        </p>
        <h1 className="mt-2 text-headline-lg font-sans text-on-surface">
          Engineering Toolkit
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {stackCategories.map((category, index) => (
          <Reveal key={category.name} index={index}>
            <div className="glass-card luminescent-border h-full rounded-card p-6">
              <h2 className="text-headline-md font-sans text-on-surface">
                {category.name}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {category.items.map((item) => {
                  const Icon = stackIconMap[item.icon];
                  return (
                    <div key={item.name} className="flex items-center gap-2">
                      <Icon
                        size={16}
                        className="text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-label-mono font-mono text-on-surface-variant">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
