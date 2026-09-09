import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import essenceImage from "@/public/images/essence-image.webp";

export default function Essence() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      {/* Container principal da seção */}
      <div className="wrapper grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Coluna de Texto (Esquerda) - Agora ocupa 6 colunas apenas a partir de lg (1024px) */}
        <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 lg:space-y-10">
          {/* Tag 'A ESSÊNCIA POTIGUAR' com linha decorativa */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-px bg-primary/90" />
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
              A essência potiguar
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-text-title tracking-tight leading-tight">
            Tradição que se <br className="hidden sm:block" /> renova à mesa.
          </h2>

          {/* Parágrafos de Texto */}
          <div className="space-y-4 lg:space-y-6 font-sans text-base leading-relaxed max-w-xl">
            <p className="text-text-main">
              Nossa cozinha é um tributo às águas do Potengi e às terras férteis
              do Rio Grande do Norte. Transformamos ingredientes nativos e
              memórias afetivas em uma experiência gastronômica contemporânea.
            </p>
            <p className="text-text-muted">
              Cada prato conta uma história de pescadores, sertanejos e da brisa
              do mar, apresentada com a sofisticação que os novos tempos exigem,
              sem perder a alma da nossa cultura.
            </p>
          </div>

          {/* Link 'NOSSA HISTÓRIA' com ícone Lucide */}
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2.5 uppercase font-sans text-sm font-semibold text-text-title hover:text-text-muted transition-colors group pt-2"
          >
            Nossa História
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Coluna da Imagem (Direita) */}
        <div className="lg:col-span-6 relative w-full h-95 sm:h-112.5 lg:h-130 xl:h-145">
          {/* Imagem Principal Otimizada com Next/Image */}
          <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src={essenceImage}
              alt="Salão interno aconchegante do Potengi Cozinha Regional com mesas de madeira e cadeiras de palha"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Gradiente sutil nas bordas para dar profundidade */}
            <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent pointer-events-none z-10" />
          </div>

          {/* Card Flutuante com o Texto Circular Giratório */}
          <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 lg:-bottom-10 lg:-left-10 w-28 h-28 sm:w-32 sm:h-32 lg:w-38 lg:h-38 bg-background-alt p-2.5 sm:p-3 rounded-2xl lg:rounded-3xl shadow-xl border border-border z-20 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* SVG responsivo com texto circular em rotação contínua */}
              <svg
                className="w-full h-full animate-[spin_20s_linear_infinite]"
                viewBox="0 0 100 100"
              >
                <path
                  id="textPath"
                  d="M 15, 50 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="text-[9.2px] uppercase font-sans font-medium tracking-[0.25em] fill-primary">
                  <textPath href="#textPath" startOffset="0%">
                    POTENGI • COZINHA • REGIONAL •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
