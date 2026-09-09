export default function Hero() {
  return (
    <section className="relative w-full pt-20 pb-12 md:pt-28 md:pb-16 bg-background text-center">
      <div className="wrapper mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl flex flex-col items-center space-y-4">
        {/* Detalhe minimalista superior */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary/90" />
          <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
            Gastronomia
          </span>
          <div className="w-8 h-px bg-primary/90" />
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-title tracking-tight leading-[1.15]">
          O Cardápio
        </h1>

        {/* Descrição */}
        <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
          Uma jornada sensorial pelos sabores e memórias do Rio Grande do Norte,
          reimaginados através da lente da alta gastronomia contemporânea.
        </p>

        {/* Aviso de Preços Discreto e Elegante */}
        <span className="font-sans text-xs tracking-wider text-text-muted/60 uppercase pt-2">
          * O cardápio e preços podem sofrer alterações sem aviso prévio.
        </span>
      </div>
    </section>
  );
}
