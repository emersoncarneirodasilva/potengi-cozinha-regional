"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/src/interface/galleryItem";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [visibleCount, setVisibleCount] = useState<number>(7);

  const categories = [
    { label: "Todos", value: "todos" },
    { label: "Pratos", value: "pratos" },
    { label: "Ambiente", value: "ambiente" },
    { label: "Drinks", value: "drinks" },
    { label: "Experiência", value: "experiencia" },
  ];

  const filteredItems =
    activeCategory === "todos"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;
  const showLess = visibleCount > 7 && !hasMore; // Aparece quando já expandiu tudo

  const handleCategoryChange = (categoryValue: string) => {
    setActiveCategory(categoryValue);
    setVisibleCount(7);
  };

  const handleToggleView = () => {
    if (hasMore) {
      // Carrega mais itens
      setVisibleCount((prev) => prev + 6);
    } else {
      // Recolhe de volta para o estado inicial e rola suavemente para o topo da seção
      setVisibleCount(7);
      const section = document.getElementById("gallery-section");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="gallery-section"
      className="py-12 md:py-16 bg-background scroll-mt-24"
    >
      <div className="wrapper space-y-12">
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat.value
                  ? "bg-text-title text-background shadow-md scale-105"
                  : "bg-background border border-text-muted/20 text-text-muted hover:border-text-title hover:text-text-title"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid assimétrico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {visibleItems.map((item, index) => {
            const positionInCycle = index % 7;
            let colSpanClass = "lg:col-span-4";

            if (positionInCycle === 0) {
              colSpanClass = "lg:col-span-7";
            } else if (positionInCycle === 1) {
              colSpanClass = "lg:col-span-5";
            } else if (positionInCycle === 2 || positionInCycle === 3) {
              colSpanClass = "lg:col-span-6";
            }

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl group shadow-sm bg-text-muted/10 transition-all duration-500 h-80 sm:h-90 ${colSpanClass}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-text-title/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Botão Dinâmico (Carregar Mais / Mostrar Menos) */}
        {(hasMore || showLess) && (
          <div className="flex justify-center pt-4">
            <button
              onClick={handleToggleView}
              className="px-8 py-3 rounded-full border border-text-title/30 text-text-title font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-text-title hover:text-background cursor-pointer"
            >
              {hasMore ? "Carregar Mais Fotos" : "Mostrar Menos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
