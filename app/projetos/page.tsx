"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Pagination } from "@/components/projects/pagination";
import type { Project } from "@/lib/data/projects";

const ITEMS_PER_PAGE = 10;

const statusFilters: { label: string; value: Project["status"] | "todos" }[] = [
  { label: "Todos", value: "todos" },
  { label: "Concluídos", value: "concluido" },
  { label: "Em desenvolvimento", value: "em-desenvolvimento" },
  { label: "Pausados", value: "pausado" },
];

export default function ProjetosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<Project["status"] | "todos">("todos");

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = activeFilter === "todos" || p.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleFilter = (value: Project["status"] | "todos") => {
    setActiveFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">Portfólio</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">Projetos</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {projects.length} projetos no total — bots, sites e ferramentas.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-xs">
            <PiMagnifyingGlassBold className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar projetos..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full rounded-lg border border-border/60 bg-card py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-subtle outline-none transition-all focus:border-border focus:bg-surface-hover"
            />
            {search && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <PiXBold className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
            {statusFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => handleFilter(f.value)}
                className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-mono transition-all ${
                  activeFilter === f.value
                    ? "border-border bg-accent text-foreground"
                    : "border-border/40 text-subtle hover:border-border/60 hover:text-muted-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-sm text-muted-foreground">Nenhum projeto encontrado.</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveFilter("todos");
              }}
              className="mt-3 text-xs text-subtle hover:text-muted-foreground transition-colors underline underline-offset-2"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <>
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs text-subtle">
                {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
              </span>
              {totalPages > 1 && (
                <span className="font-mono text-xs text-subtle">
                  Página {currentPage} de {totalPages}
                </span>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {paginated.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
