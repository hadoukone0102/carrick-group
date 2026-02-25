import { NAV_ITEMS } from "@/features/contants/head.intdex";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[50vh] bg-primary text-white overflow-hidden flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">

      {/* Top section */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12">

        {/* Colonne gauche : Brand + Coordonnées + Emploi + Réseaux */}
        <div className="flex flex-col gap-8 max-w-sm shrink-0">

          {/* Logo */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image src="/A/logo.png" height={50} width={50} alt="Logo"/>
              {/* <div
                className="w-8 h-8 rounded-lg shrink-0"
                style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
              />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
              >
                Carrick
              </span> */}
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Groupe multisectoriel engagé dans la construction, le conseil,
              l&apos;aluminium et la distribution agro-industrielle.
            </p>
          </div>

          {/* Adresse & Coordonnées */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-white mb-1">
              Adresse
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              15, rue du Château<br />
              75001 Paris, France
            </p>
            <a
              href="mailto:info@monsite.fr"
              className="text-sm text-white/60 hover:text-white transition-colors duration-150"
            >
              info@monsite.fr
            </a>
            <span className="text-sm text-white/60">Tél : 01 23 45 67 89</span>
            <span className="text-sm text-white/60">Fax : 01 23 45 67 89</span>
          </div>

          {/* Offres d'emploi */}
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-white mb-1">
              Offres d&apos;emploi
            </span>
            <p className="text-sm text-white/60 leading-relaxed">
              Pour postuler, envoyez votre C.V à :{" "}
              <a
                href="mailto:info@monsite.fr"
                className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
              >
                info@monsite.fr
              </a>
            </p>
            <p className="text-sm text-white/60">
              Devis gratuit :{" "}
              <a
                href="tel:0123456789"
                className="text-white/80 hover:text-white transition-colors"
              >
                01 23 45 67 89
              </a>
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-3">
            {["X", "in", "fb"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-white/40 hover:border-white/60 hover:text-white transition-all duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Colonnes nav — générées depuis NAV_ITEMS (seulement ceux avec enfants) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 flex-1 lg:max-w-2xl">
          {NAV_ITEMS.filter((item) => item.children && item.children.length > 0).map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-white mb-1">
                {item.label}
              </span>
              {item.children!.map((child) => (
                <a
                  key={child.href}
                  href={child.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150 leading-snug"
                >
                  {child.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="text-xs text-white/30">
          © {new Date().getFullYear()} Groupe Carrick. Tous droits réservés.
        </span>
        <div className="flex gap-6">
          {["Confidentialité", "CGU", "Cookies"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-white/30 hover:text-white/60 transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}