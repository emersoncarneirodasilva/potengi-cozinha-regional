export default function Hero() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <span className="font-sans text-xs uppercase tracking-widest font-semibold text-primary flex items-center justify-center gap-2">
        <span className="w-8 h-px bg-primary/90" />
        Fale Conosco
        <span className="w-8 h-px bg-primary/90" />
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-text-title tracking-tight">
        Contato
      </h1>
      <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
        Sinta-se à vontade para nos contatar para informações, eventos fechados
        ou para compartilhar sua experiência no Potengi.
      </p>
    </div>
  );
}
