"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiHouseBold, PiFoldersBold, PiGithubLogoBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

const dockItems = [
  { label: "Início", href: "/", icon: PiHouseBold, external: false },
  { label: "Projetos", href: "/projetos", icon: PiFoldersBold, external: false },
  { label: "GitHub", href: "https://github.com/daviazv", icon: PiGithubLogoBold, external: true },
];

export function Dock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-2xl border border-border/60 bg-card/90 px-3 py-2 shadow-xl backdrop-blur-xl">
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = !item.external && pathname === item.href;

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group relative flex flex-col items-center"
              >
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/60 bg-card px-2 py-1 text-[10px] text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 font-mono">
                  {item.label}
                </span>
                <div className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200",
                  "border-border/40 text-muted-foreground hover:border-border hover:bg-accent hover:text-foreground hover:-translate-y-1"
                )}>
                  <Icon className="h-4 w-4" />
                </div>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="group relative flex flex-col items-center"
            >
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border/60 bg-card px-2 py-1 text-[10px] text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100 font-mono">
                {item.label}
              </span>
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-1",
                isActive
                  ? "border-border bg-accent text-foreground"
                  : "border-border/40 text-muted-foreground hover:border-border hover:bg-accent hover:text-foreground"
              )}>
                <Icon className="h-4 w-4" />
              </div>
              {isActive && (
                <span className="mt-1 h-1 w-1 rounded-full bg-foreground/60" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
