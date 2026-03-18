"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PiDotOutlineFill } from "react-icons/pi";
import { SiDiscord, SiGithub } from "react-icons/si";

export function HeroSection() {
  return (
    <section className="pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col gap-8"
      >
        <div className="flex items-start gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border">
            <Image
              src="/icon.jpg"
              alt="Foto de perfil de Davi Azevedo"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">Davi Azevedo</h1>
              <span className="flex items-center gap-1 rounded-full border border-border/60 bg-card px-2 py-0.5 text-xs text-muted-foreground font-mono">
                <PiDotOutlineFill className="h-3 w-3 text-green-500/80" />
                disponível
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Desenvolvedor · Python &amp; Bots Discord</p>

            <div className="mt-2 flex items-center gap-2">
              <a
                href="https://github.com/daviazv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-border hover:bg-accent hover:text-foreground"
                aria-label="GitHub"
              >
                <SiGithub className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com/users/409698127218475008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-border hover:bg-accent hover:text-foreground"
                aria-label="Discord"
              >
                <SiDiscord className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Desenvolvedor focado em <span className="text-foreground font-medium">Python</span> e automação.
            Crio bots Discord completos, sistemas de moderação, economia e muito mais.
            Também desenvolvo sites modernos com <span className="text-foreground font-medium">Next.js</span>.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Aprendendo constantemente. Cada projeto é uma oportunidade de escrever código mais limpo e eficiente.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
