import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Snowflake, History, Zap, Globe, Heart, Cpu } from "lucide-react";

export const Route = createFileRoute("/curiosidades")({
  head: () => ({
    meta: [
      { title: "Curiosidades sobre Ar Condicionado — ArClima" },
      {
        name: "description",
        content:
          "Descubra curiosidades sobre ar condicionado: história, funcionamento, impacto ambiental, saúde e tecnologia.",
      },
      { property: "og:title", content: "Curiosidades sobre Ar Condicionado — ArClima" },
      {
        property: "og:description",
        content:
          "Descubra curiosidades sobre ar condicionado: história, funcionamento, impacto ambiental, saúde e tecnologia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CuriosidadesPage,
});

const curiosityCards = [
  {
    icon: History,
    title: "A origem do ar condicionado",
    content:
      "O primeiro sistema moderno de ar condicionado foi criado por Willis Carrier em 1902, não para conforto, mas para controlar a umidade em uma gráfica em Nova York.",
  },
  {
    icon: Snowflake,
    title: "Como o frio é produzido",
    content:
      "O ar condicionado não “fabrica” frio. Ele retira o calor do ambiente através de um fluido refrigerante que evapora e condensa em um ciclo contínuo.",
  },
  {
    icon: Zap,
    title: "Inversor de frequência",
    content:
      "Aparelhos inverter ajustam a rotação do compressor conforme a temperatura ambiente, evitando ligar e desligar o tempo todo. Isso reduz o consumo em até 40%.",
  },
  {
    icon: Globe,
    title: "Impacto ambiental",
    content:
      "Os refrigerantes mais modernos, como o R-32, têm menor potencial de aquecimento global. Sempre que possível, opte por equipamentos com tecnologia mais limpa.",
  },
  {
    icon: Heart,
    title: "Saúde e bem-estar",
    content:
      "Quando bem mantido, o ar condicionado melhora a qualidade do ar interno, reduzindo alérgenos, poeira e umidade excessiva. A falta de limpeza, porém, pode causar o efeito oposto.",
  },
  {
    icon: Cpu,
    title: "Inteligência artificial",
    content:
      "Modelos inteligentes aprendem seus hábitos, detectam presença e se conectam a assistentes virtuais. A tendência é o ar condicionado se tornar cada vez mais eficiente e automatizado.",
  },
];

function CuriosidadesPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Curiosidades
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fatos interessantes que vão fazer você olhar para o ar condicionado com outros olhos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curiosityCards.map((card) => (
            <Card key={card.title} className="transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <card.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
