"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

/**
 * Scroll-triggered staggered reveal used on the Projects and Stack pages.
 * Automatically simplified for viewers who prefer reduced motion via the
 * app-wide MotionConfig.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
