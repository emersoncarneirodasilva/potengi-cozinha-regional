import Image from "next/image";
import dishImage from "@/public/images/dish3.webp";

export default function OurRoots() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Coluna da Esquerda: Textos (Ocupa 7 colunas) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Detalhe do Traço + Overline Profissional */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-primary/90" />
              <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
                Nossa História
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title tracking-tight leading-[1.15]">
              Nossas Raízes
            </h2>

            {/* Parágrafos Descritivos */}
            <div className="space-y-4 font-sans text-base md:text-lg text-text-muted leading-relaxed">
              <p>
                Nascido às margens do Rio Potengi, nosso restaurante é um
                tributo à rica tapeçaria cultural e gastronômica do Rio Grande
                do Norte. Não nos limitamos a reproduzir o passado; nós o
                reinterpretamos através de uma lente contemporânea, refinada e
                inovadora.
              </p>
              <p>
                Cada prato é uma narrativa visual e sensorial, desenhada para
                celebrar os ingredientes locais — do sal marinho artesanal às
                raízes profundas do sertão — elevados por técnicas modernas que
                respeitam sua integridade e pureza original.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Imagem em formato Retrato (Portrait) na medida certa (Ocupa 5 colunas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full h-110 sm:h-120 lg:h-130 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={dishImage}
                alt="Prato sofisticado do Potengi Cozinha Regional"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
