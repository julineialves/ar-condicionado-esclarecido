import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, Droplets, Filter, Fan, ThermometerSun, AlertTriangle } from "lucide-react";
import componentesImg from "@/assets/ar-condicionado-componentes.png";

export const Route = createFileRoute("/manutencoes")({
  head: () => ({
    meta: [
      { title: "Manutenção de Ar Condicionado — ArClima" },
      {
        name: "description",
        content:
          "Guia completo de manutenção de ar condicionado: limpeza de filtros, higienização, revisão técnica e sinais de que é hora de chamar um profissional.",
      },
      { property: "og:title", content: "Manutenção de Ar Condicionado — ArClima" },
      {
        property: "og:description",
        content:
          "Guia completo de manutenção de ar condicionado: limpeza de filtros, higienização, revisão técnica e sinais de que é hora de chamar um profissional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ManutencoesPage,
});

const maintenanceTasks = [
  {
    icon: Filter,
    title: "Limpeza dos filtros",
    frequency: "A cada 15 dias",
    description:
      "Filtros sujos reduzem a eficiência, aumentam o consumo e prejudicam a qualidade do ar. Lave com água corrente e deixe secar completamente antes de recolocar.",
  },
  {
    icon: Droplets,
    title: "Higienização das serpentinas",
    frequency: "A cada 6 meses",
    description:
      "A limpeza das serpentinas evita o acúmulo de fungos e bactérias. Use produtos específicos ou contrate um técnico para fazer a higienização corretamente.",
  },
  {
    icon: Fan,
    title: "Verificação da turbina",
    frequency: "Anualmente",
    description:
      "A turbina acumula poeira e pode desbalancear. A revisão garante que o ventilador gire livremente, sem ruídos e com boa vazão de ar.",
  },
  {
    icon: ThermometerSun,
    title: "Inspeção do gás refrigerante",
    frequency: "Quando necessário",
    description:
      "Se o aparelho não esfria como antes, pode estar com baixa carga de gás. Não se completa gás se o gás vazou: é porque tem vazamento. O correto é encontrar e corrigir o vazamento primeiro.",
  },
  {
    icon: Calendar,
    title: "Revisão técnica completa",
    frequency: "Uma vez por ano",
    description:
      "Um técnico qualificado deve verificar elétrica, drenagem, pressões, isolamento e funcionamento geral. A manutenção preventiva evita quebras e prolonga a vida útil.",
  },
];

const warningSigns = [
  "Ar não sai frio como antes",
  "Barulhos ou vibrações incomuns",
  "Goteira ou infiltração na parede",
  "Mau cheiro ao ligar",
  "Aumento repentino na conta de luz",
];

function ManutencoesPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Manutenções
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Cuide do seu equipamento com segurança. Veja o que você pode fazer e quando chamar um técnico.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/50 bg-card p-4 shadow-sm sm:p-6">
          <img
            src={componentesImg}
            alt="Vista explodida de um ar-condicionado split de parede com identificação dos componentes internos: tampa superior, filtros de ar, evaporador, turbina ventiladora, bandeja de drenagem, aletas direcionadoras, painel frontal, carcaça traseira, tubos de cobre, isolamento térmico, motor do ventilador, placa eletrônica, sensor de temperatura, saída e entrada de ar, e suportes de fixação."
            className="w-full rounded-lg"
            loading="lazy"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Conhecer os componentes internos ajuda a entender por que cada manutenção é importante.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceTasks.map((task) => (
            <Card key={task.title} className="transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <task.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{task.title}</CardTitle>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {task.frequency}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-card">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background p-6 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Sinais de alerta</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Se você notar algum desses sintomas, é hora de agendar uma revisão:
              </p>
              <ul className="mt-4 space-y-2">
                {warningSigns.map((sign) => (
                  <li key={sign} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
