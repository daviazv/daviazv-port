import type { ComponentType } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiNodedotjs,
} from "react-icons/si";

export type Skill = {
  name: string;
  level: "principal" | "secundario" | "basico";
  description: string;
  icon: ComponentType<{ className?: string }>;
  note?: string;
};

export const skills: Skill[] = [
  {
    name: "Python",
    level: "principal",
    description: "Foco principal. Bots, automação, scripts e APIs.",
    icon: SiPython,
  },
  {
    name: "JavaScript",
    level: "secundario",
    description: "Parei de focar, mas ainda desenvolvo sistemas robustos.",
    icon: SiJavascript,
    note: "Foco reduzido",
  },
  {
    name: "TypeScript",
    level: "basico",
    description: "Experiência em projetos pontuais. Tipagem sólida quando necessário.",
    icon: SiTypescript,
    note: "Projetos limitados",
  },
  {
    name: "Node.js",
    level: "secundario",
    description: "APIs, bots escaláveis, automações e integrações.",
    icon: SiNodedotjs,
  },
  {
    name: "Next.js",
    level: "secundario",
    description: "Sites, portfólios e dashboards com App Router.",
    icon: SiNextdotjs,
  },
  {
    name: "HTML/CSS",
    level: "secundario",
    description: "Base sólida. Sites estáticos e templates.",
    icon: SiHtml5,
  },
];