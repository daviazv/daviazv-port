"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (totalPages <= 5) return pages;
    if (currentPage <= 3) return [...pages.slice(0, 5), -1, totalPages];
    if (currentPage >= totalPages - 2) return [1, -1, ...pages.slice(totalPages - 5)];
    return [1, -1, currentPage - 1, currentPage, currentPage + 1, -1, totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex items-center gap-1" aria-label="Paginação">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-border hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        aria-label="Página anterior"
      >
        <PiCaretLeftBold className="h-3.5 w-3.5" />
      </button>

      {visiblePages.map((page, i) =>
        page === -1 ? (
          <span key={`ellipsis-${i}`} className="flex h-8 w-8 items-center justify-center text-xs text-subtle">
            ···
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-mono transition-all",
              page === currentPage
                ? "bg-foreground text-background font-semibold"
                : "border border-border/60 text-muted-foreground hover:border-border hover:bg-accent hover:text-foreground"
            )}
            aria-label={`Ir para página ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-border hover:bg-accent hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
        aria-label="Próxima página"
      >
        <PiCaretRightBold className="h-3.5 w-3.5" />
      </button>
    </nav>
  );
}
