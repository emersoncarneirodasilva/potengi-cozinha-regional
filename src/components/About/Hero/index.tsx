import Image from "next/image";
import heroImage from "@/public/images/about-hero.webp";

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-background">
      {/* Imagem de Fundo com a mesma estrutura de overlay do outro projeto */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Salão interno do Potengi Cozinha Regional"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Camada translúcida com a cor de fundo e leve blur (o segredo do outro projeto) */}
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[1px]" />

        {/* Gradiente Fade na parte inferior para fundir com a página */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Conteúdo Principal */}
      <div className="relative wrapper mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-text-title font-medium tracking-tight mb-6 leading-[1.15]">
          Uma nova forma de saborear o Potiguar.
        </h1>

        <p className="text-text-muted text-base md:text-lg font-normal max-w-2xl leading-relaxed">
          Elevamos a tradição a um novo patamar, onde a essência da nossa terra
          encontra a vanguarda da culinária contemporânea.
        </p>
      </div>
    </section>
  );
}
