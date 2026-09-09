import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DISHES } from "@/src/constants/dishes";

export default function FeaturedDishes() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="wrapper flex flex-col items-center">
        {/* Cabeçalho da Seção com Título e Botão de Menu Completo */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary/90" />
              <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
                O Cardápio
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title tracking-tight leading-tight">
              Pratos em Destaque
            </h2>
          </div>

          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 uppercase font-sans text-xs tracking-wider font-semibold text-text-title hover:text-primary transition-colors group pb-2 border-b border-text-title/30 hover:border-primary w-fit"
          >
            Ver menu completo
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid de Pratos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {DISHES.map((dish, index) => (
            <div
              key={index}
              className="bg-background-alt border border-border/60 rounded-3xl overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Imagem do Prato com Badge de Preço */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-border/20">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge de Preço Flutuante */}
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border/80 shadow-xs">
                  <span className="font-sans text-xs md:text-sm font-semibold text-text-title">
                    {dish.price}
                  </span>
                </div>
              </div>

              {/* Informações do Prato */}
              <div className="p-8 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-text-title mb-3">
                    {dish.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
