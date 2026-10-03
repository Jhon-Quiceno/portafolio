"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SocialLinkProps = {
  name: string;
  href: string;
  icon: ReactNode;
};

// `icon` is passed in already rendered (from a server component) rather
// than as a component reference, since functions/components can't cross
// the server -> client boundary as plain props.
export function SocialLink({ name, href, icon }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card luminescent-border flex items-center gap-4 rounded-card p-6 text-on-surface"
    >
      {icon}
      <span className="text-headline-md font-sans">{name}</span>
    </motion.a>
  );
}
