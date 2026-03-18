"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PiArrowRightBold, PiXBold, PiCodeBold, PiArrowSquareOutBold } from "react-icons/pi";
import type { Project } from "@/lib/data/projects";
import { StatusBadge } from "./status-badge";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: index * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-border hover:bg-surface-hover"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <PiCodeBold className="h-4 w-4 shrink-0 text-subtle" />
            <span className="font-mono text-xs text-subtle">{project.year}</span>
          </div>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          Ver detalhes
          <PiArrowRightBold className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </button>
      </motion.article>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <StatusBadge status={project.status} />
                    <span className="font-mono text-xs text-subtle">{project.year}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{project.title}</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground transition-all"
                >
                  <PiXBold className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {project.details}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.repo) && (
                <div className="mt-5 flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-foreground hover:underline"
                    >
                      Acessar
                      <PiArrowSquareOutBold className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Repositório
                      <PiArrowSquareOutBold className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
