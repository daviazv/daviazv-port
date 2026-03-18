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
            aria-label="GitHub"
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
            aria-label="Discord"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.046-.32 13.579.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 6.031 3.052.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.291a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.04.106c.36.698.771 1.363 1.225 1.993a.076.076 0 0 0 .084.028 19.836 19.836 0 0 0 6.03-3.052.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
