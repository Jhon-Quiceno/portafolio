import { globalStack } from "@/lib/stack";
import { stackIconMap } from "@/components/icon-map";

/** Home page, bottom-left: a compact 2x3 grid of the core stack. */
export function StackWidget() {
  return (
    <div className="glass-card luminescent-border delay-2 animate-boot hidden w-64 rounded-card p-4 lg:block">
      <p className="mb-3 text-label-caps font-mono uppercase text-on-surface-variant">
        Global Stack
      </p>
      <div className="grid grid-cols-2 gap-3">
        {globalStack.map((item) => {
          const Icon = stackIconMap[item.icon];
          return (
            <div key={item.name} className="flex items-center gap-2">
              <Icon size={14} className="text-primary" aria-hidden="true" />
              <span className="text-label-mono font-mono text-on-surface-variant">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
