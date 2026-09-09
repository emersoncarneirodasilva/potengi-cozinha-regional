import { MeatCategory } from "./MeatCategory";
import { SeafoodCategory } from "./SeafoodCategory";

export default function MainCourses() {
  return (
    <section className="w-full pt-12 md:py-20 bg-background">
      <div className="wrapper">
        {/* Título Geral da Seção */}
        <div className="flex items-center justify-end gap-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-text-title tracking-tight text-right">
            Pratos Principais
          </h2>
          <div className="w-12 h-px bg-primary/90" />
        </div>

        {/* Bloco contendo as subcategorias em ordem */}
        <div className="flex flex-col space-y-12 md:space-y-24">
          <MeatCategory />
          <SeafoodCategory />
        </div>
      </div>
    </section>
  );
}
