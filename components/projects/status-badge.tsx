import type { Project } from "@/lib/data/projects";

type StatusBadgeProps = {
  status: Project["status"];
};

const statusConfig = {
  concluido: { label: "Concluído", classes: "text-foreground/70 bg-foreground/8" },
  "em-desenvolvimento": { label: "Em desenvolvimento", classes: "text-foreground/50 bg-foreground/5" },
  pausado: { label: "Pausado", classes: "text-subtle bg-muted" },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-mono ${config.classes}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-60" />
      {config.label}
    </span>
  );
}
