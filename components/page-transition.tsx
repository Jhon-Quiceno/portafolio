"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Boot-up style route transition. app/template.tsx mounts a fresh instance
 * of this per route, so a simple mount animation gives each navigation the
 * same fade+blur feel as the hero's .animate-boot entrance.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
