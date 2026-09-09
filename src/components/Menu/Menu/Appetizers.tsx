"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { APPETIZERS_DATA } from "@/src/constants/appetizersData";

export default function Appetizers() {
  const [selectedDish, setSelectedDish] = useState(APPETIZERS_DATA[0]);
  const [showAll, setShowAll] = useState(false);

  // Controla a exibição tanto no desktop quanto no mobile
  const visibleDishes = showAll ? APPETIZERS_DATA : APPETIZERS_DATA.slice(0, 3);

  return (
    <section className="w-full py-12 md:py-20 bg-background">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-px bg-primary/90" />
          <h2 className="text-3xl sm:text-4xl font-medium text-text-title tracking-tight">
            Entradas
          </h2>
        </div>

        {/* DESKTOP: Grid interativa com expansão */}
        <div className="hidden lg:grid grid-cols-12 gap-16 xl:gap-24 items-start">
          <div className="col-span-6 flex flex-col space-y-6">
            {visibleDishes.map((dish) => {
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
                      className={`text-xl font-medium transition-colors ${
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

            {/* Botão Ver Mais / Ver Menos Desktop */}
            <div className="pt-4">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary font-semibold hover:text-primary/80 transition-all cursor-pointer"
              >
                <span>
                  {showAll ? "Ver menos entradas" : "Ver mais entradas"}
                </span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          </div>

          {/* Lado Direito: Wrapper sticky externo + Container relative interno para a Image fill */}
          <div className="col-span-6 sticky top-28">
            <div className="relative h-120 w-full rounded-lg overflow-hidden shadow-xl border border-text-muted/15">
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

        {/* MOBILE: Agora com o mesmo comportamento controlado pelo botão */}
        <div className="lg:hidden flex flex-col space-y-8">
          {visibleDishes.map((dish) => (
            <div
              key={dish.id}
              className="flex flex-col space-y-4 pb-6 border-b border-text-muted/10 last:border-b-0"
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
                <h3 className="text-xl font-medium text-text-title">
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

          {/* Botão Ver Mais / Ver Menos Mobile */}
          <div className="pt-2">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary font-semibold hover:text-primary/80 transition-all cursor-pointer"
            >
              <span>
                {showAll ? "Ver menos entradas" : "Ver mais entradas"}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
