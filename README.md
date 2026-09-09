# 🍲 Potengi Cozinha Regional | Landing Page & Sistema Institucional

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" alt="Status" />
</div>

<br>

> Uma aplicação web moderna, elegante e de alta conversão desenvolvida para um restaurante de alta gastronomia potiguar. Localizado estrategicamente às margens do Rio Potengi, na charmosa Praia da Redinha (Natal - RN), o projeto simula uma experiência gastronômica contemporânea de alto padrão. Este projeto faz parte do portfólio oficial da **RAM Stack**, empresa especializada em criação de sites e soluções digitais de alto desempenho.

---

## 🌐 Acesse o Projeto
* **URL de Produção:** [https://potengi-cozinha-regional.pages.dev](https://potengi-cozinha-regional.pages.dev)

---

## 📋 Sobre o Projeto

O **Potengi Cozinha Regional** é uma plataforma digital completa que une a sofisticação da culinária nordestina contemporânea com uma experiência de usuário (UX) fluida e responsiva. O site foi planejado para transmitir a essência da cultura potiguar, exibir cardápios interativos, destacar a vista panorâmica da região e otimizar o fluxo de captação de clientes através de reservas digitais integradas.

---

## 🎯 Objetivos do Projeto

* **Presença Digital de Impacto:** Consolidar a marca com um design sofisticado, paleta de cores acolhedora e identidade visual imersiva.
* **Conversão Direta:** Facilitar o agendamento de reservas via WhatsApp com validação de dados e mensagens pré-configuradas.
* **SEO Local Otimizado:** Estruturado com metadados avançados e Open Graph para destacar o restaurante nas buscas por frutos do mar e culinária típica em Natal/RN.
* **Performance e Fluidez:** Navegação rápida, componentes modulares e feedback visual em tempo real com toasts interativos.

---

## 📄 Detalhamento das Páginas e Rotas

A arquitetura da aplicação foi estruturada utilizando o **Next.js App Router**, garantindo rotas limpas, layouts dinâmicos e separação de responsabilidades:

1. **Página Inicial (`/`)**: Cartão de visitas digital com seção *Hero* imersiva, prévias dos pratos principais inspirados no Rio Potengi e blocos de conversão rápida.
2. **Sobre (`/sobre`)**: Conexão emocional com a história do restaurante, valorização dos pescadores da Redinha e compromisso com a culinária regional contemporânea.
3. **Cardápio (`/cardapio`)**: Exibição organizada e apetitosa de pratos típicos, frutos do mar, petiscos e carta de bebidas.
4. **Galeria (`/galeria`)**: Experiência visual em grade destacando o ambiente aconchegante, a vista panorâmica e a apresentação dos pratos.
5. **Contato (`/contato`)**: Central de atendimento contendo o formulário inteligente de reservas (com redirecionamento automático para o WhatsApp e notificações *Sonner*) e mapa interativo.
6. **Termos de Uso (`/termos`)**: Diretrizes legais e regras de navegação do site institucional.
7. **Política de Privacidade (`/privacidade`)**: Transparência sobre a proteção e o tratamento de dados dos usuários.

---

## ✨ Recursos Principais

* **Hero Section Imersiva:** Destaque visual com chamadas para ação (*CTA*) dinâmicas.
* **Formulário de Reserva Inteligente:** Coleta dados do cliente (Nome, Telefone/WhatsApp, Data, Horário e Pessoas) e gera links automáticos de atendimento.
* **Feedback com Sonner:** Notificações em estilo *toast* para interações bem-sucedidas do usuário.
* **Responsividade Total:** Layout adaptado perfeitamente para dispositivos móveis, tablets e desktops.
* **Páginas Legais Integradas:** Conformidade institucional com páginas de Termos e Privacidade dedicadas.

---

## 🛠️ Stack Tecnológico (RAM Stack / Modern Web)

* **Framework:** Next.js 16+ (App Router)
* **Biblioteca UI:** React 19
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS v4 (`@tailwindcss/postcss`)
* **Ícones:** Lucide React
* **Notificações:** Sonner
* **Linter:** ESLint

---

## 📁 Estrutura do Projeto

```text
potengi-cozinha-regional/
├── public/
│   └── images/            # Imagens otimizadas do restaurante e pratos
├── src/
│   ├── app/
│   │   ├── about/         # Página Sobre (/sobre)
│   │   ├── cardapio/      # Página de Cardápio (/cardapio)
│   │   ├── contato/       # Página de Contato e Reservas (/contato)
│   │   ├── galeria/       # Página de Galeria (/galeria)
│   │   ├── privacidade/   # Política de Privacidade (/privacidade)
│   │   ├── termos/        # Termos de Uso (/termos)
│   │   ├── layout.tsx     # Layout raiz, fontes (Libre Caslon & Hanken Grotesk) e metadados SEO
│   │   ├── page.tsx       # Página principal (Home)
│   │   └── globals.css    # Configurações globais e variáveis do Tailwind v4
│   └── components/
│       ├── Header.tsx     # Navegação fixa superior
│       ├── Footer.tsx     # Rodapé institucional e links rápidos
│       └── ...            # Demais componentes modulares
├── package.json           # Dependências e scripts do projeto
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação oficial

```

---

## 📦 Dependências do Projeto (`package.json`)

```json
{
  "name": "potengi-cozinha-regional",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.40.0",
    "next": "16.3.4",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "sonner": "^2.0.8"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^10.9.1",
    "eslint-config-next": "^16.3.4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}

```

---

## 🚀 Como Executar o Projeto Localmente

Certifique-se de ter o **Node.js** (versão 20+) instalado em sua máquina.

1. **Clone o repositório:**
```bash
git clone [https://github.com/emersoncarneirodasilva/potengi-cozinha-regional.git](https://github.com/emersoncarneirodasilva/potengi-cozinha-regional.git)
cd potengi-cozinha-regional

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


4. **Acesse no navegador:**
Abra [http://localhost:3000](http://localhost:3000) para ver o projeto rodando.

---

## 📚 Scripts Disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento local. |
| `npm run build` | Compila o projeto otimizado para produção. |
| `npm run start` | Inicia o servidor em modo de produção. |
| `npm run lint` | Executa o linter (ESLint) para validação estática de código. |

---

## 🌐 Informações Regionais & SEO Local

* **Localização Fictícia:** Praia da Redinha, Natal - RN (inspirado nas margens do Rio Potengi).
* **Público-alvo:** Apreciadores da alta gastronomia regional, turistas e moradores locais em busca de experiências culinárias autênticas.
* **Otimização:** Configurado com metadados robustos e tags *Open Graph* (`og:image`, `twitter:card`, etc.) para compartilhamento otimizado em redes sociais e aplicativos de mensagens.

---

## 👨‍💻 Autor & Empresa

Projeto concebido e desenvolvido por **RAM Stack (Emerson Carneiro da Silva)**, com foco em demonstrar excelência estética, arquitetura de componentes limpa, performance otimizada e foco total em conversão para negócios locais.
