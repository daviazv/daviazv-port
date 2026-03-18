import { SiDiscord, SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-subtle">
          &copy; {new Date().getFullYear()} Davi Azevedo — Todos os direitos reservados
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/daviazv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-subtle transition-colors hover:text-muted-foreground"
          >
            <SiGithub className="h-3.5 w-3.5" />
            GitHub
          </a>

          <span className="h-3 w-px bg-border" />

          <a
            href="https://discord.com/users/409698127218475008"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-subtle transition-colors hover:text-muted-foreground"
          >
            <SiDiscord className="h-3.5 w-3.5" />
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
