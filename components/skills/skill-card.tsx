"use client";

import type { Skill } from "@/lib/data/skills";

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon;

  return (
    <div className="group flex items-center gap-4 rounded-lg border border-border/60 bg-card p-4 transition-all duration-300 hover:border-border hover:bg-surface-hover h-16">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent">
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
          {skill.note && (
            <span className="text-xs text-subtle font-mono">— {skill.note}</span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground truncate">
          {skill.description}
        </p>
      </div>
    </div>
  );
}
