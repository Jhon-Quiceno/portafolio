"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TerminalSquare } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Stack" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between px-4 lg:px-gutter">
        <Link
          href="/"
          className="flex items-center gap-2 text-label-mono font-mono text-primary"
        >
          <TerminalSquare size={16} aria-hidden="true" />
          SYST_M 1.0
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-label-mono font-mono uppercase transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded bg-primary px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.05em] text-on-primary md:inline-flex"
        >
          Architect Mode
        </Link>
      </div>
    </header>
  );
}
