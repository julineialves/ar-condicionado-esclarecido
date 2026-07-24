import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Lightbulb, Wrench, ArrowRight, Thermometer, Wind, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-ar-condicionado.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArClima — Dúvidas, Curiosidades e Manutenção de Ar Condicionado" },
      {
        name: "description",
        content:
          "Tire suas dúvidas sobre ar condicionado, descubra curiosidades e aprenda a cuidar da manutenção do seu equipamento com segurança.",
      },
      {
        property: "og:title",
        content: "ArClima — Dúvidas, Curiosidades e Manutenção de Ar Condicionado",
      },
      {
        property: "og:description",
        content:
          "Tire suas dúvidas sobre ar condicionado, descubra curiosidades e aprenda a cuidar da manutenção do seu equipamento com segurança.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: HomePage,
});

const highlights = [
  {
    icon: HelpCircle,
    title: "Dúvidas",
    description: "Respostas claras sobre consumo, instalação, barulho, vazamento e muito mais.",
    to: "/duvidas",
  },
  {
    icon: Lightbulb,
    title: "Curiosidades",
    description: "Descubra como o ar condicionado funciona, sua história e dicas surpreendentes.",
    to: "/curiosidades",
  },
  {
    icon: Wrench,
    title: "Manutenções",
    description: "Saiba quando e como fazer a limpeza, a troca de filtros e a revisão técnica.",
    to: "/manutencoes",
  },
];

const quickTips = [
  {
    icon: Thermometer,
    title: "Temperatura ideal",
    description: "Configure entre 23 °C e 25 °C para conforto e economia de energia.",
  },
  {
    icon: Wind,
    title: "Limpeza periódica",
    description: "Lave os filtros a cada 15 dias para manter a qualidade do ar.",
  },
  {
    icon: ShieldCheck,
    title: "Revisão anual",
    description: "Contrate um técnico qualificado para inspeção completa uma vez por ano.",
  },
];

function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-background via-breeze-50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Ar condicionado descomplicado
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Tudo o que você precisa saber sobre o seu ar condicionado em um só lugar.
                Dúvidas, curiosidades e orientações de manutenção para você respirar melhor.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/duvidas">Tirar dúvidas</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/manutencoes">Ver manutenções</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-xl shadow-breeze-200/30">
                <img
                  src={heroImage}
                  alt="Sala de estar moderna com ar condicionado emitindo ar fresco"
                  width={1344}
                  height={768}
                  className="h-auto w-full object-cover"
                  priority="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Explore por tema</h2>
          <p className="mt-3 text-muted-foreground">Escolha o assunto que mais te interessa.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="group transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-breeze-200/20">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Link
                  to={item.to}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors group-hover:gap-2"
                >
                  Saiba mais <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Dicas rápidas</h2>
            <p className="mt-3 text-muted-foreground">Pequenas ações que fazem grande diferença.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {quickTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-border/50 bg-card p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mx-flex mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <tip.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
