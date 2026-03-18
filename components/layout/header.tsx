"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projetos" },
];

export function Header() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes nav-drop {
          from { opacity: 0; transform: translateY(-18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nav-pill {
          animation: nav-drop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .nav-glow {
          box-shadow:
            0 0 0 1px oklch(0.28 0 0),
            0 4px 24px -4px oklch(0 0 0 / 0.6),
            0 0 40px -8px oklch(0.97 0 0 / 0.04);
          transition: box-shadow 0.3s;
        }
        .nav-glow:hover {
          box-shadow:
            0 0 0 1px oklch(0.32 0 0),
            0 8px 32px -4px oklch(0 0 0 / 0.7),
            0 0 60px -8px oklch(0.97 0 0 / 0.08);
        }
      `}</style>

      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <div className={cn("w-full max-w-3xl pointer-events-auto opacity-0", visible && "nav-pill")}>
          <div className="nav-glow flex items-center justify-between rounded-2xl bg-card/80 px-4 py-2.5 backdrop-blur-2xl">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-border/80 transition-all group-hover:ring-border">
                <Image
                  src="/icon.jpg"
                  alt="Foto de perfil de Davi Azevedo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                Davi Azevedo
              </span>
            </Link>

            <nav className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 whitespace-nowrap",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {pathname === item.href && (
                    <span className="absolute inset-0 rounded-lg bg-accent -z-10" />
                  )}
                  {item.label}
                </Link>
              ))}

              <a
                href="https://github.com/daviazv"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent/60 whitespace-nowrap"
              >
                GitHub
                <PiArrowUpRightBold className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-20" />
    </>
  );
}
