import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Building2,
  Ruler,
  Zap,
  Droplets,
  CheckCircle2,
  Wrench,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/instalacoes")({
  head: () => ({
    meta: [
      { title: "Instalação de Ar Condicionado — ArClima" },
      {
        name: "description",
        content:
          "Guia completo sobre instalação de ar condicionado: tipos de equipamentos, cálculo de BTUs, escolha do local, infraestrutura necessária e cuidados essenciais.",
      },
      { property: "og:title", content: "Instalação de Ar Condicionado — ArClima" },
      {
        property: "og:description",
        content:
          "Guia completo sobre instalação de ar condicionado: tipos de equipamentos, cálculo de BTUs, escolha do local, infraestrutura necessária e cuidados essenciais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: InstalacoesPage,
});

const equipmentTypes = [
  {
    icon: Home,
    title: "Split Hi-Wall",
    description:
      "O mais comum em residências. É silencioso, econômico e fica alto na parede, liberando espaço no ambiente.",
  },
  {
    icon: Building2,
    title: "Split Cassete / Piso-Teto",
    description:
      "Indicado para comércios e ambientes amplos. Distribui o ar de forma uniforme e tem maior capacidade.",
  },
  {
    icon: Zap,
    title: "Inverter",
    description:
      "Regula a rotação do compressor conforme a necessidade. Gasta menos energia em uso prolongado e é mais silencioso.",
  },
];

const sizingGuidelines = [
  { range: "Até 12 m²", btus: "9.000 BTUs" },
  { range: "12 a 18 m²", btus: "12.000 BTUs" },
  { range: "18 a 25 m²", btus: "18.000 BTUs" },
  { range: "25 a 35 m²", btus: "24.000 BTUs" },
  { range: "35 a 45 m²", btus: "30.000 BTUs" },
];

const installationSteps = [
  {
    icon: Ruler,
    title: "Avaliação do ambiente",
    description:
      "O técnico mede o espaço, verifica a insolação, número de pessoas e aparelhos que geram calor para indicar a capacidade ideal.",
  },
  {
    icon: Zap,
    title: "Infraestrutura elétrica",
    description:
      "É preciso um circuito exclusivo com fio e disjuntor adequados para a potência do equipamento. Nunca ligue em tomadas comuns.",
  },
  {
    icon: Droplets,
    title: "Drenagem e tubulação",
    description:
      "A tubulação de cobre deve seguir o padrão do fabricante da máquina. A drenagem deve ter declive correto para evitar goteiras e entupimentos.",
  },
  {
    icon: Wrench,
    title: "Instalação e teste",
    description:
      "Após fixar as unidades, faz-se o vácuo na tubulação, conecta a elétrica e testa o funcionamento, pressões e vazamento de gás.",
  },
];

const locationTips = [
  "Evite instalar o evaporador em frente a camas ou sofás — o ar direto pode causar desconforto.",
  "Deixe espaço livre ao redor das unidades para facilitar a manutenção.",
  "O condensador precisa de ventilação livre e sombra para trabalhar melhor.",
  "A tubulação deve ser a mais curta possível para preservar a eficiência.",
];

function InstalacoesPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Instalações
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber antes de instalar ar condicionado: tipos, cálculo de BTUs e cuidados essenciais.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Tipos de equipamentos
        </h2>
        <p className="mt-2 text-muted-foreground">
          Escolher o modelo certo depende do ambiente, do orçamento e das necessidades de conforto.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {equipmentTypes.map((type) => (
            <Card key={type.title} className="transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <type.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Quantos BTUs por ambiente?
          </h2>
          <p className="mt-2 text-muted-foreground">
            A regra dos metros quadrados ajuda a escolher um aparelho econômico e eficiente. Valores aproximados para ambientes residenciais comuns.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sizingGuidelines.map((item) => (
              <Card key={item.range} className="text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
                <CardHeader>
                  <CardTitle className="text-base">{item.range}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary">{item.btus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Etapas da instalação
        </h2>
        <p className="mt-2 text-muted-foreground">
          Uma instalação bem feita evita vazamentos, goteiras e consumo excessivo de energia.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {installationSteps.map((step) => (
            <Card key={step.title} className="transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-card">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-background p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Dicas de posicionamento</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              O local certo melhora o conforto e a eficiência do aparelho:
            </p>
            <ul className="mt-4 space-y-2">
              {locationTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-border/50 bg-background p-6 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Instalação é serviço técnico</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A instalação de ar condicionado deve ser feita por um profissional habilitado. Além de garantir a segurança, a instalação correta preserva a garantia do fabricante e evita problemas futuros.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
