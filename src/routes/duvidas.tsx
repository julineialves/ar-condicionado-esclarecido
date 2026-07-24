import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/duvidas")({
  head: () => ({
    meta: [
      { title: "Dúvidas sobre Ar Condicionado — ArClima" },
      {
        name: "description",
        content:
          "Respostas para as principais dúvidas sobre ar condicionado: consumo, barulho, vazamento, goteira, odor e muito mais.",
      },
      { property: "og:title", content: "Dúvidas sobre Ar Condicionado — ArClima" },
      {
        property: "og:description",
        content:
          "Respostas para as principais dúvidas sobre ar condicionado: consumo, barulho, vazamento, goteira, odor e muito mais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: DuvidasPage,
});

const faqItems = [
  {
    question: "Qual a temperatura ideal para o ar condicionado?",
    answer:
      "A recomendação geral é manter entre 23 °C e 25 °C. Além de ser confortável, essa faixa ajuda a economizar energia e evita choques térmicos ao sair do ambiente.",
  },
  {
    question: "Ar condicionado consome muita energia?",
    answer:
      "O consumo depende da potência do equipamento, do tempo de uso, da temperatura configurada e da eficiência energética. Aparelhos com selo Procel A e o uso do modo econômico reduzem bastante a conta.",
  },
  {
    question: "Por que meu ar condicionado está pingando?",
    answer:
      "A goteira pode ser causada por tubulação de drenagem entupida, instalação incorreta ou falta de nivelamento. O ideal é chamar um técnico para inspecionar e evitar infiltrações.",
  },
  {
    question: "É normal o ar condicionado fazer barulho?",
    answer:
      "Ruídos suaves do ventilador são normais. Já estalos, rangidos ou vibrações fortes podem indicar sujeira, peças soltas ou desgaste. A manutenção preventiva resolve a maioria dos casos.",
  },
  {
    question: "Como eliminar o mau cheiro do ar condicionado?",
    answer:
      "Odores geralmente vêm de fungos e bactérias acumulados nos filtros e serpentinas. Limpar os filtros regularmente e fazer a higienização profissional eliminam o problema.",
  },
  {
    question: "Posso instalar o ar condicionado em qualquer parede?",
    answer:
      "Não. A parede precisa suportar o peso, ter acesso à rede elétrica e permitir a passagem da tubulação para o condensador. A instalação deve ser feita por profissional qualificado.",
  },
  {
    question: "Devo deixar o ar condicionado ligado o dia todo?",
    answer:
      "Não é necessário. Use temporizadores ou o modo sleep para manter o conforto durante o sono sem desperdício. Desligar ao sair de casa também ajuda a economizar.",
  },
  {
    question: "Qual a diferença entre ar condicionado split e janela?",
    answer:
      "O split é mais silencioso, econômico e discreto, com a unidade externa separada. O de janela é mais barato, mas costuma ser mais barulhento e menos eficiente.",
  },
];

function DuvidasPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-breeze-50/50">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Dúvidas sobre ar condicionado
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            As perguntas mais comuns respondidas de forma simples e direta.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
