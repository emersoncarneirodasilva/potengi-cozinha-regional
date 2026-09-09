import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o Potengi Cozinha Regional coleta, utiliza e protege as informações dos seus clientes e visitantes.",
};

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-text-title tracking-tight mb-4">
            Política de Privacidade
          </h1>
          <p className="text-xs md:text-sm tracking-wider uppercase text-text-main/70">
            Última atualização: Setembro de 2026
          </p>
        </div>

        {/* Conteúdo da Política de Privacidade */}
        <div className="max-w-4xl flex flex-col gap-8 text-sm md:text-base leading-relaxed text-text-main/90">
          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              1. Compromisso com a Privacidade
            </h2>
            <p>
              O{" "}
              <strong className="text-text-title">
                Potengi Cozinha Regional
              </strong>{" "}
              valoriza a sua privacidade e está comprometido em proteger os
              dados pessoais de seus clientes, parceiros e visitantes do site.
              Esta Política de Privacidade explica de forma transparente como
              coletamos, usamos, armazenamos e protegemos suas informações em
              conformidade com as leis aplicáveis, incluindo a Lei Geral de
              Proteção de Dados (LGPD).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              2. Coleta de Informações
            </h2>
            <p>
              Podemos coletar informações pessoais quando você interage
              voluntariamente conosco através do nosso site, tais como:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-text-main/80">
              <li>
                <strong className="text-text-title">
                  Dados de Contato e Reserva:
                </strong>{" "}
                Nome completo, número de telefone, e-mail e preferências
                informadas ao solicitar reservas ou entrar em contato.
              </li>
              <li>
                <strong className="text-text-title">Dados de Navegação:</strong>{" "}
                Informações recolhidas automaticamente através de cookies e
                tecnologias semelhantes para melhorar a sua experiência de
                navegação (como endereço IP, tipo de navegador e páginas
                visitadas).
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              3. Uso das Informações
            </h2>
            <p>
              Os dados coletados são utilizados estritamente para os seguintes
              fins:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-text-main/80">
              <li>
                Gerenciar e confirmar solicitações de reservas de mesas no
                restaurante.
              </li>
              <li>
                Responder a dúvidas, sugestões ou solicitações enviadas através
                dos nossos canais de atendimento.
              </li>
              <li>
                Melhorar continuamente a usabilidade, o design e o desempenho do
                nosso site e serviços.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              4. Compartilhamento de Dados
            </h2>
            <p>
              O Potengi Cozinha Regional não comercializa, aluga ou transfere
              dados pessoais de seus clientes para terceiros. O compartilhamento
              ocorre apenas quando estritamente necessário para o funcionamento
              operacional (como plataformas de hospedagem do site ou ferramentas
              essenciais de comunicação), sempre exigindo o mesmo rigor de
              segurança e confidencialidade.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              5. Segurança da Informação
            </h2>
            <p>
              Adotamos medidas técnicas, físicas e administrativas adequadas
              para proteger os dados pessoais sob nossa guarda contra acesso não
              autorizado, perda, alteração ou destruição indevida.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              6. Direitos do Titular
            </h2>
            <p>
              Você tem o direito de solicitar a confirmação da existência de
              tratamento, acesso, correção ou exclusão de seus dados pessoais
              armazenados por nós, bastando entrar em contato através dos nossos
              canais oficiais de atendimento.
            </p>
          </section>

          <section className="flex flex-col gap-3 pt-4 border-t border-border">
            <h2 className="text-xl md:text-2xl font-bold text-text-title">
              7. Contato sobre Privacidade
            </h2>
            <p>
              Caso tenha dúvidas, comentários ou solicitações relacionadas a
              esta Política de Privacidade, entre em contato conosco pelo
              telefone{" "}
              <span className="font-semibold text-text-title">
                {phoneNumber}
              </span>{" "}
              ou diretamente em nosso estabelecimento na Praia da Redinha, Natal
              - RN.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
