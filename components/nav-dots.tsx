"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
] as const;

/**
 * Vertical scroll-spy style dot indicators, one per route, with uppercase
 * mono labels that fade in on hover.
 */
export function NavDots() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      {routes.map((route) => {
        const active = pathname === route.href;
        return (
          <Link
            key={route.href}
            href={route.href}
            className="group flex items-center gap-3"
          >
            <span className="text-label-caps font-mono uppercase text-on-surface-variant opacity-0 transition-opacity group-hover:opacity-100">
              {route.label}
            </span>
            <span
              className={`h-2 w-2 rounded-full border transition-colors ${
                active
                  ? "border-primary bg-primary"
                  : "border-outline bg-transparent"
              }`}
            />
          </Link>
        );
      })}
    </aside>
  );
}
