"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MEATS_DATA } from "@/src/constants/meatsData";

export function MeatCategory() {
  const [selectedDish, setSelectedDish] = useState(MEATS_DATA[0]);
  const [showAll, setShowAll] = useState(false);

  // Exibe apenas os 3 primeiros por padrão, ou todos se showAll for true
  const displayedDishes = showAll ? MEATS_DATA : MEATS_DATA.slice(0, 3);
  const hasMore = MEATS_DATA.length > 3;

  return (
    <div className="w-full">
      {/* DESKTOP: Carnes (Lista à esquerda, Imagem à direita) */}
      <div className="hidden lg:grid grid-cols-12 gap-16 xl:gap-24 items-start">
        {/* Lado Esquerdo: Cabeçalho da Categoria + Lista de Pratos */}
        <div className="col-span-6 flex flex-col space-y-6">
          {/* Cabeçalho da Categoria Alinhado à Esquerda */}
          <div className="flex items-center gap-4 mb-2">
            <span className="font-sans text-xs uppercase tracking-widest text-primary font-semibold">
              Carnes
            </span>
            <div className="flex-1 h-px bg-primary/20" />
          </div>

          {displayedDishes.map((dish) => {
            const isSelected = selectedDish.id === dish.id;
            return (
              <div
                key={dish.id}
                onClick={() => setSelectedDish(dish)}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-lg border ${
                  isSelected
                    ? "bg-text-title/5 border-primary/40 shadow-sm"
                    : "border-transparent hover:bg-text-title/5"
                }`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3
                    className={`text-xl font-serif font-medium transition-colors ${
                      isSelected ? "text-primary" : "text-text-title"
                    }`}
                  >
                    {dish.name}
                  </h3>
                  <span className="font-sans text-base font-semibold text-text-title">
                    {dish.price}
                  </span>
                </div>
                <p className="font-sans text-sm text-text-muted leading-relaxed max-w-lg">
                  {dish.description}
                </p>
              </div>
            );
          })}

          {/* Botão Ver Mais / Ver Menos */}
          {hasMore && (
            <div className="pt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary font-semibold hover:text-primary/80 transition-all cursor-pointer"
              >
                <span>{showAll ? "Ver menos pratos" : "Ver mais pratos"}</span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Lado Direito: Imagem Fixa Proporcional */}
        <div className="col-span-6 sticky top-28">
          <div className="relative h-115 w-full rounded-lg overflow-hidden shadow-xl border border-text-muted/15">
            <Image
              key={selectedDish.id}
              src={selectedDish.image}
              alt={selectedDish.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-opacity duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-xs px-4 py-2 rounded-md border border-text-muted/20 shadow-sm z-10">
              <span className="font-sans text-xs tracking-widest uppercase font-semibold text-text-title">
                Destaque: {selectedDish.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: Carnes */}
      <div className="lg:hidden flex flex-col space-y-8">
        <span className="font-sans text-xs uppercase tracking-widest text-primary font-semibold">
          Carnes
        </span>
        {displayedDishes.map((dish) => (
          <div
            key={dish.id}
            className="flex flex-col space-y-4 pb-6 border-b border-text-muted/10"
          >
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-serif font-medium text-text-title">
                {dish.name}
              </h3>
              <span className="font-sans text-base font-semibold text-text-title">
                {dish.price}
              </span>
            </div>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              {dish.description}
            </p>
          </div>
        ))}

        {hasMore && (
          <div className="pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary font-semibold transition-all"
            >
              <span>{showAll ? "Ver menos pratos" : "Ver mais pratos"}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
