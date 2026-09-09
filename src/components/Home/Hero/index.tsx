"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, BookOpen } from "lucide-react";
import heroImage1 from "@/public/images/home-hero1.webp";
import heroImage2 from "@/public/images/home-hero2.webp";
import heroImage3 from "@/public/images/home-hero3.webp";
import heroImage4 from "@/public/images/home-hero4.webp";

const images = [heroImage1, heroImage2, heroImage3, heroImage4];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // Garante que o gatilho de animação inicial dispare imediatamente após montar no cliente
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Efeito de transição automática a cada 6 segundos
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Variáveis de contato do WhatsApp
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+5584999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de reservar uma mesa no Potengi.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Container do Carrossel com Efeito Ken Burns (Zoom Alternado) */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => {
          const isActive = index === currentIndex;
          const isZoomIn = index % 2 === 0;

          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={img}
                alt={`Prato da culinária potiguar contemporânea - Slide ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center transition-transform duration-6000 ease-out ${
                  hasMounted && isActive
                    ? isZoomIn
                      ? "scale-110"
                      : "scale-100"
                    : isZoomIn
                      ? "scale-100"
                      : "scale-110"
                }`}
              />
            </div>
          );
        })}

        {/* Gradiente refinado por cima das imagens para garantir a leitura do texto */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.45) 100%)",
          }}
        />
      </div>

      {/* Conteúdo Central da Hero */}
      <div className="wrapper relative z-30 flex flex-col items-center text-center py-16 md:py-24">
        {/* Título Principal com sombra reforçada */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight max-w-4xl leading-[1.1] mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Sabores do Rio Grande do Norte,{" "}
          <span className="text-text-title-detail italic">
            reinterpretados.
          </span>
        </h1>

        {/* Subtítulo com sombra */}
        <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Uma experiência de gastronomia potiguar contemporânea na Redinha, em
          Natal.
        </p>

        {/* Botões de Ação (CTA) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary hover:brightness-110 text-white font-semibold text-xs md:text-sm tracking-wider uppercase px-8 py-4 rounded-md transition-all shadow-xl"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Reservar pelo WhatsApp</span>
          </Link>

          <Link
            href="/cardapio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/20 hover:bg-black/30 text-white border border-white/60 font-semibold text-xs md:text-sm tracking-wider uppercase px-8 py-4 rounded-md transition-all backdrop-blur-xs shadow-lg"
          >
            <BookOpen className="w-4 h-4" />
            <span>Conhecer o Cardápio</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
