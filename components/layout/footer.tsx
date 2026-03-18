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
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M20 4.5a16.5 16.5 0 0 0-4-1.3l-.2.4c-.1.3-.2.5-.3.8a14.7 14.7 0 0 0-5 0c-.1-.3-.2-.5-.3-.8l-.2-.4a16.5 16.5 0 0 0-4 1.3C3.5 8 2.8 11.4 3.1 14.7a16.3 16.3 0 0 0 5 2.5l.4-.6c.1-.2.3-.4.4-.6-.6-.2-1.1-.5-1.6-.8l.4-.3c3.2 1.5 6.7 1.5 9.9 0l.4.3c-.5.3-1 .6-1.6.8.1.2.3.4.4.6l.4.6a16.3 16.3 0 0 0 5-2.5c.4-3.6-.5-7-2.7-10.2z"/>
              <circle cx="9" cy="12" r="1.2" fill="white" />
              <circle cx="15" cy="12" r="1.2" fill="white" />
            </svg>
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
      }
