import { PiGithubLogoBold } from "react-icons/pi";

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
            <PiGithubLogoBold className="h-3.5 w-3.5" />
            GitHub
          </a>

          <span className="h-3 w-px bg-border" />

          <a
            href="https://discord.com/users/409698127218475008"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-subtle transition-colors hover:text-muted-foreground"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path d="M19.54 4.22a17.06 17.06 0 0 0-4.27-1.31.06.06 0 0 0-.06.03c-.19.34-.4.78-.55 1.13a15.9 15.9 0 0 0-4.32 0c-.15-.35-.36-.79-.55-1.13a.06.06 0 0 0-.06-.03 17.06 17.06 0 0 0-4.27 1.31.05.05 0 0 0-.02.02C2.7 8.27 1.9 12.1 2.28 15.9a.06.06 0 0 0 .02.04 17.2 17.2 0 0 0 5.18 2.62.06.06 0 0 0 .07-.02c.4-.55.75-1.12 1.05-1.72a.06.06 0 0 0-.03-.08 11.3 11.3 0 0 1-1.61-.77.06.06 0 0 1 0-.1c.11-.08.22-.16.32-.25a.06.06 0 0 1 .06-.01c3.37 1.54 7.02 1.54 10.35 0a.06.06 0 0 1 .06.01c.1.09.21.17.32.25a.06.06 0 0 1 0 .1c-.52.3-1.06.56-1.61.77a.06.06 0 0 0-.03.08c.3.6.65 1.17 1.05 1.72a.06.06 0 0 0 .07.02 17.2 17.2 0 0 0 5.18-2.62.06.06 0 0 0 .02-.04c.44-4.16-.75-7.97-3.16-11.66a.05.05 0 0 0-.02-.02z"/>
            </svg>
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
