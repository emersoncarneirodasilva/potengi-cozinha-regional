import Link from "next/link";
import { Home, UtensilsCrossed, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grow flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8 bg-text-muted/5 border border-text-muted/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-lg backdrop-blur-sm">
        {/* Destaque Numérico e Ícone */}
        <div className="flex flex-col items-center space-y-4 w-full">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-text-title/5 border border-text-title/10 text-text-title text-xs uppercase tracking-widest font-semibold gap-2">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Erro 404 • Página não encontrada</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-text-title tracking-tight">
            404
          </h1>
        </div>

        {/* Mensagem Institucional */}
        <div className="space-y-3 max-w-lg mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-text-title font-medium">
            Prato não encontrado no cardápio
          </h2>
          <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
            A página que você está tentando acessar pode ter sido removida, o
            link está desatualizado ou o endereço foi digitado incorretamente.
          </p>
        </div>

        {/* Botões de Ação / Rotas de Fuga */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4 w-full">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-text-title text-background font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:scale-[1.02] shadow-md cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </Link>

          <Link
            href="/cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-xl bg-background border border-text-muted/20 text-text-title font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:border-text-title hover:bg-text-muted/5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explorar Cardápio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
