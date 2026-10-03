import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects — Jhon Quiceno",
  description: "A curated selection of real projects built by Jhon Quiceno.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 mx-auto min-h-screen w-full max-w-container px-4 pt-28 pb-24 lg:px-gutter">
      <Reveal>
        <p className="text-label-caps font-mono uppercase text-primary">
          Projects
        </p>
        <h1 className="mt-2 text-headline-lg font-sans text-on-surface">
          Selected Work
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} index={index}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}
