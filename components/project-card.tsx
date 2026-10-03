"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card luminescent-border group flex h-full flex-col justify-between rounded-card p-6"
    >
      <div>
        <h3 className="text-headline-md font-sans text-on-surface">
          {project.name}
        </h3>
        <p className="mt-2 text-body-sm text-on-surface-variant">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white/10 bg-white/5 px-2 py-1 text-label-mono font-mono text-on-surface-variant"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-label-mono font-mono uppercase text-primary transition-colors group-hover:text-primary-container">
        View on GitHub
        <ExternalLink size={14} aria-hidden="true" />
      </div>
    </motion.a>
  );
}
