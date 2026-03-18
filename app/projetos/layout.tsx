import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">{children}</main>
      <div className="mx-auto w-full max-w-3xl px-6">
        <Footer />
      </div>
    </div>
  );
}
