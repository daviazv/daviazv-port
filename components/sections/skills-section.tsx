"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/skills";
import { SkillCard } from "@/components/skills/skill-card";

export function SkillsSection() {
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
            Tecnologias
          </h2>
          <span className="font-mono text-xs text-subtle">{skills.length} linguagens</span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
