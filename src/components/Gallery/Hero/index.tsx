export default function Hero() {
  return (
    <section className="pt-28 pb-8 md:pt-36 md:pb-12 bg-background">
      <div className="wrapper">
        <div className="max-w-2xl flex flex-col items-start space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest font-semibold text-primary flex items-center gap-2">
            <span className="w-10 h-px bg-primary/90" />
            Nosso Universo Visual
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-title tracking-tight leading-[1.1]">
            A Experiência Potengi
          </h1>
          <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
            Um passeio fotográfico pela nossa culinária, ambiente e pelos
            detalhes que fazem do Potengi um refúgio gastronômico.
          </p>
        </div>
      </div>
    </section>
  );
}
