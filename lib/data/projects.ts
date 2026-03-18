export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  status: "concluido" | "em-desenvolvimento" | "pausado";
  year: number;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [];
