"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PiArrowRightBold } from "react-icons/pi";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

const PREVIEW_COUNT = 4;

export function ProjectsPreviewSection() {
  const featured = projects.slice(0, PREVIEW_COUNT);

  if (projects.length === 0) {
    return (
      <section className="py-12 border-t border-border/40">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-subtle">
            Projetos recentes
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">Nenhum projeto encontrado.</p>
      </section>
    );
  }

  return (
    <section className="py-12 border-t border-border/40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-subtle">
            Projetos recentes
          </h2>
          <Link
            href="/projetos"
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todos
            <PiArrowRightBold className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/projetos"
            className="flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-border hover:bg-accent hover:text-foreground"
          >
            Ver todos os {projects.length} projetos
            <PiArrowRightBold className="h-3.5 w-3.5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
