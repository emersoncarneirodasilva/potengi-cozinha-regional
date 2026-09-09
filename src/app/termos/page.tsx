import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Consulte os termos de uso e condições para navegação e utilização dos serviços do Potengi Cozinha Regional.",
};

export default function TermsOfUse() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "(84) 99999-9999";

  return (
    <main className="w-full bg-background py-16 md:py-24 text-text-main">
      <div className="wrapper">
        {/* Botão de Voltar para a Página Inicial */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-primary hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>

        {/* Cabeçalho da Página */}
        <div className="border-b border-border pb-8 mb-12">
          <h1 className="font-libre-caslon text-3xl md:text-5xl font-bold text-text-title tracking-tight mb-4">
            Termos de Uso
          </h1>
          <p className="text-xs md:text-sm tracking-wider uppercase text-text-main/70">
            Última atualização: Setembro de 2026
          </p>
        </div>

        {/* Conteúdo dos Termos */}
        <div className="max-w-4xl flex flex-col gap-8 text-sm md:text-base leading-relaxed text-text-main/90">
          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              1. Aceitação dos Termos
            </h2>
            <p>
              Bem-vindo ao site do{" "}
              <strong className="text-text-title">
                Potengi Cozinha Regional
              </strong>
              . Ao acessar e utilizar este website (disponível em nosso domínio
              oficial), você concorda expressamente em cumprir e se vincular aos
              presentes Termos de Uso. Caso não concorde com qualquer parte
              destes termos, recomendamos que interrompa imediatamente a
              navegação.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              2. Uso do Website e Reservas
            </h2>
            <p>
              Este site tem como objetivo principal apresentar o cardápio, a
              proposta gastronômica, o ambiente e disponibilizar canais de
              contato e solicitação de reservas para o nosso restaurante,
              situado na Praia da Redinha, em Natal - RN.
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-text-main/80">
              <li>
                O usuário compromete-se a fornecer informações verdadeiras e
                precisas ao preencher formulários de contato ou reserva.
              </li>
              <li>
                É terminantemente proibido o uso do site para fins ilícitos,
                envio de conteúdos maliciosos ou tentativas de burlar a
                segurança da plataforma.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo disponibilizado neste portal — incluindo textos,
              fotografias, logotipos, identidade visual, ícones, códigos-fonte e
              elementos de design — é de propriedade exclusiva do Potengi
              Cozinha Regional ou devidamente licenciado, sendo protegido pelas
              leis de direitos autorais e propriedade intelectual brasileiras. A
              reprodução não autorizada para fins comerciais é estritamente
              proibida.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              4. Limitação de Responsabilidade
            </h2>
            <p>
              O Potengi Cozinha Regional emprega seus melhores esforços para
              manter as informações do site (como preços, disponibilidade de
              pratos, horários de funcionamento e eventos) sempre atualizadas e
              corretas. No entanto, podem ocorrer alterações operacionais sem
              aviso prévio. Não nos responsabilizamos por eventuais
              instabilidades temporárias de conexão ou falhas de acesso alheias
              ao nosso controle.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              5. Links Externos
            </h2>
            <p>
              Nosso site pode conter links para plataformas de terceiros (como
              redes sociais e aplicativos de mapa). O Potengi Cozinha Regional
              não se responsabiliza pelas políticas de privacidade, práticas ou
              conteúdos presentes nesses sites externos.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              6. Alterações nos Termos
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento, visando a melhoria contínua do portal ou
              adequação a novas exigências legais. As alterações entram em vigor
              imediatamente após a sua publicação nesta página.
            </p>
          </section>

          <section className="flex flex-col gap-3 pt-4 border-t border-border">
            <h2 className="font-libre-caslon text-xl md:text-2xl font-bold text-text-title">
              7. Contato
            </h2>
            <p>
              Caso tenha dúvidas sobre estes Termos de Uso, entre em contato
              conosco através dos nossos canais oficiais informados no rodapé do
              site ou diretamente pelo telefone{" "}
              <span className="font-semibold text-text-title">
                {phoneNumber}
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
