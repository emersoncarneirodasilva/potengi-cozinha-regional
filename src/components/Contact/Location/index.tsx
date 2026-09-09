export default function Location() {
  return (
    <section className="py-16 md:py-24 bg-background-alt border-t border-text-muted/10">
      <div className="wrapper space-y-12">
        {/* Cabeçalho da Seção */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="font-sans text-xs uppercase tracking-widest font-semibold text-primary flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary/90" />
            Como Chegar
            <span className="w-8 h-px bg-primary/90" />
          </span>
          <h2 className="text-4xl sm:text-5xl font-medium text-text-title tracking-tight">
            Nossa Localização
          </h2>
          <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
            Venha apreciar a vista panorâmica do Rio Potengi e da Ponte Newton
            Navarro na charmosa Praia da Redinha.
          </p>
        </div>

        {/* Mapa / Embed do Google Maps (Endereço da Redinha, Natal/RN) */}
        <div className="relative w-full h-100 md:h-120 rounded-2xl overflow-hidden shadow-sm border border-text-muted/10">
          <iframe
            title="Localização Potengi Cozinha Regional"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5898379203647!2d-35.2444!3d-5.7481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3013b5e400001%3A0x80b66c429d5b4a92!2sPraia%20da%20Redinha%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
