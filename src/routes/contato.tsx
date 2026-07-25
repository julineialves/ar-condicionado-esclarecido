import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — ArClima" },
      {
        name: "description",
        content:
          "Entre em contato com a ArClima. Tire dúvidas, solicite orientações sobre manutenção ou envie sugestões de conteúdo.",
      },
      { property: "og:title", content: "Contato — ArClima" },
      {
        property: "og:description",
        content:
          "Entre em contato com a ArClima. Tire dúvidas, solicite orientações sobre manutenção ou envie sugestões de conteúdo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contato</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tem uma dúvida que não encontrou por aqui? Envie uma mensagem para nós.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Envie uma mensagem</CardTitle>
              <CardDescription>
                Responderemos o quanto antes. Este formulário é apenas para contato informativo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg bg-secondary p-6 text-center">
                  <p className="font-medium text-foreground">Mensagem enviada!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Obrigado pelo contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input id="subject" name="subject" placeholder="Dúvida sobre manutenção" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Escreva sua mensagem aqui..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensagem
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Outras formas de falar conosco</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-foreground">
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="mailto:julineialvespaes2017@gmail.com" className="hover:text-primary transition-colors">
                    julineialvespaes2017@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  <a
                    href="https://wa.me/5547997840536"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    (47) 99784-0536
                  </a>
                </div>
                <div className="flex items-start gap-3 text-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>Cascavel, PR — 85806-230</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aviso importante</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  As informações deste site têm caráter educativo e não substituem o atendimento
                  de um técnico autorizado. Para instalações, reparos e manutenções técnicas,
                  sempre procure um profissional qualificado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
