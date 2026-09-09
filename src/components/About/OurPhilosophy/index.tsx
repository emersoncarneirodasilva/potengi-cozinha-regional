import { PILLARS } from "@/src/constants/pillars";

export default function OurPhilosophy() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background-alt overflow-hidden">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Centralizado */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center space-y-4 mb-16 md:mb-24">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-primary/90" />
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
              Filosofia
            </span>
            <div className="w-8 h-px bg-primary/90" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-medium text-text-title tracking-tight leading-[1.15]">
            Nossa Essência
          </h2>

          <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
            Pilares que sustentam nossa paixão por servir bem e reinventar a
            tradição potiguar a cada serviço.
          </p>
        </div>

        {/* Grade de 4 Pilares com Cards Estilo Alta Gastronomia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PILLARS.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col p-8 rounded-xl bg-background border border-text-muted/15 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-500 group overflow-hidden"
            >
              {/* Detalhe de luz/borda superior elegante no hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Topo do Card: Número estilizado + Linha sutil */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif text-2xl text-primary font-light tracking-wider">
                  {item.number}
                </span>
                <div className="w-8 h-px bg-text-muted/20 group-hover:w-12 group-hover:bg-primary/50 transition-all duration-500" />
              </div>

              {/* Título */}
              <h3 className="text-xl md:text-2xl font-medium text-text-title mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
