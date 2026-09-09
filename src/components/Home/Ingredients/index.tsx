import { INGREDIENTS_LIST } from "@/src/constants/ingredientsList";

export default function Ingredients() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background-alt">
      <div className="wrapper flex flex-col items-center">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-primary/90" />
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-primary">
              Ingredientes
            </span>
            <div className="w-8 h-px bg-primary/90" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-title tracking-tight leading-tight">
            Sabores da Nossa Terra
          </h2>
        </div>

        {/* Grid de Cards dos Ingredientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {INGREDIENTS_LIST.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-background-card border border-border/60 rounded-3xl px-4 py-8 flex flex-col items-center text-center shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Caixa do Ícone com Lucide */}
                <div className="w-14 h-14 rounded-2xl bg-background-detail border border-border/80 flex items-center justify-center mb-6 shadow-xs text-primary">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                {/* Título do Card */}
                <h3 className="text-xl md:text-2xl font-medium text-text-title mb-4">
                  {item.title}
                </h3>

                {/* Descrição do Card */}
                <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
