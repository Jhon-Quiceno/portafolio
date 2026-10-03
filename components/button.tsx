"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
};

/**
 * CTA button with a magnetic hover scale (framer-motion) and, when an icon
 * is passed, a slide-right animation on hover driven by Tailwind's group
 * utilities.
 */
export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center gap-2 rounded px-6 py-3 text-label-mono font-mono uppercase transition-colors active:scale-95 ${
    variant === "primary"
      ? "bg-primary text-on-primary hover:bg-primary/90"
      : "border border-white/10 bg-white/5 text-on-surface backdrop-blur-md hover:border-white/20"
  }`;

  const content = (
    <>
      {children}
      {icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      ) : null}
    </>
  );

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )}
    </motion.div>
  );
}
