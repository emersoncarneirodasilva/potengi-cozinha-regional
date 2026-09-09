"use client";

import Image, { StaticImageData } from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Dispatch, SetStateAction, useRef } from "react";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: StaticImageData | string;
}

interface MenuDessertsColumnProps {
  dessertsData: MenuItem[];
  selectedDessert: MenuItem;
  setSelectedDessert: Dispatch<SetStateAction<MenuItem>>;
  showAllDesserts: boolean;
  setShowAllDesserts: (show: boolean) => void;
}

export function MenuDessertsColumn({
  dessertsData,
  selectedDessert,
  setSelectedDessert,
  showAllDesserts,
  setShowAllDesserts,
}: MenuDessertsColumnProps) {
  // Referência para o topo desta coluna/seção
  const columnRef = useRef<HTMLDivElement>(null);

  const displayedDesserts = showAllDesserts
    ? dessertsData
    : dessertsData.slice(0, 3);
  const hasMoreDesserts = dessertsData.length > 3;

  const handleSelectDessert = (item: MenuItem) => {
    setSelectedDessert(item);

    // Roda apenas no desktop (quando a tela for lg ou maior)
    if (window.innerWidth >= 1024 && columnRef.current) {
      columnRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      ref={columnRef}
      className="w-full lg:col-span-6 flex flex-col space-y-16 scroll-mt-12"
    >
      {/* Título */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-px bg-primary/90 shrink-0" />
        <h2 className="text-3xl sm:text-4xl font-medium text-text-title tracking-tight">
          Sobremesas
        </h2>
      </div>

      {/* VERSÃO DESKTOP */}
      <div className="hidden lg:flex flex-col space-y-8 w-full">
        <div className="relative h-92 w-full rounded-lg overflow-hidden shadow-xl border border-text-muted/15">
          <Image
            key={selectedDessert.id}
            src={selectedDessert.image}
            alt={selectedDessert.name}
            fill
            sizes="50vw"
            className="object-cover object-center transition-opacity duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-xs px-4 py-2 rounded-md border border-text-muted/20 shadow-sm z-10">
            <span className="font-sans text-xs tracking-widest uppercase font-semibold text-text-title">
              Destaque: {selectedDessert.name}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-6 pt-6 w-full">
          {displayedDesserts.map((item) => {
            const isSelected = selectedDessert.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectDessert(item)}
                className={`cursor-pointer transition-all duration-300 p-6 rounded-lg border w-full ${
                  isSelected
                    ? "bg-text-title/5 border-primary/40 shadow-sm"
                    : "border-transparent hover:bg-text-title/5"
                }`}
              >
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <h3
                    className={`text-xl font-medium transition-colors ${
                      isSelected ? "text-primary" : "text-text-title"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="font-sans text-base font-semibold text-text-title whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="font-sans text-sm text-text-muted leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* VERSÃO MOBILE */}
      <div className="flex lg:hidden flex-col space-y-10 w-full">
        {displayedDesserts.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-4 w-full pb-6 border-b border-text-muted/10 last:border-b-0"
          >
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="flex justify-between items-baseline gap-3">
              <h3 className="text-xl font-medium text-text-title">
                {item.name}
              </h3>
              <span className="font-sans text-base font-semibold text-text-title shrink-0">
                {item.price}
              </span>
            </div>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Botão Ver Mais / Ver Menos */}
      {hasMoreDesserts && (
        <div>
          <button
            onClick={() => setShowAllDesserts(!showAllDesserts)}
            className="group inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-primary font-semibold hover:text-primary/80 transition-all cursor-pointer"
          >
            <span>
              {showAllDesserts ? "Ver menos sobremesas" : "Ver mais sobremesas"}
            </span>
            {showAllDesserts ? (
              <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}
