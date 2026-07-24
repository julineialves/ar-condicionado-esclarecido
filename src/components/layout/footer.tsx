import { Link } from "@tanstack/react-router";
import { Wind, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { to: "/duvidas", label: "Dúvidas" },
  { to: "/curiosidades", label: "Curiosidades" },
  { to: "/manutencoes", label: "Manutenções" },
  { to: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 text-foreground transition-opacity hover:opacity-80">
              <Wind className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="text-lg font-bold tracking-tight">ArClima</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Informação clara e confiável sobre ar condicionado. Esclarecemos dúvidas,
              curiosidades e orientamos sobre manutenção preventiva.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:julineialvespaes2017@gmail.com" className="hover:text-foreground transition-colors">
                  julineialvespaes2017@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                São Paulo, SP — atendimento online
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ArClima. Conteúdo informativo — consulte um técnico qualificado para serviços.
          </p>
        </div>
      </div>
    </footer>
  );
}
