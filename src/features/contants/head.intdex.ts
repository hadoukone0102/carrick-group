export const NAV_ITEMS = [
  {
    label: "Accueil",
    href: "#",
  },
  {
    label: "À Propos",
    href: "#a-propos",
    children: [
      { label: "Vision, Mission & Valeurs", href: "#vision" },
      { label: "Notre Équipe", href: "#equipe" },
      { label: "Partenaires", href: "#partenaires" },
      { label: "Nos Engagements", href: "#engagements" },
    ],
  },
  {
    label: "Nos Sociétés",
    href: "#societes",
    children: [
      { label: "Carrick Construction", href: "#construction" },
      { label: "Carrick Conseil", href: "#conseil" },
      { label: "Carrick Alu", href: "#alu" },
      { label: "Carrick Agro Retail", href: "#agro" },
      { label: "Carrick Point d'Accès aux Droits", href: "#droits" },
    ],
  },
  {
    label: "Nos Services",
    href: "#services",
    children: [
      { label: "Construction & Aménagement", href: "#service-construction" },
      { label: "Menuiserie Aluminium", href: "#service-alu" },
      { label: "Distribution Agro-Industrielle", href: "#service-distrib" },
      { label: "Conseil & Investissement", href: "#service-conseil" },
      { label: "Conseil Juridique & Administratif", href: "#service-juridique" },
    ],
  },
  {
    label: "Projets & Réalisations",
    href: "#projets",
    children: [
      { label: "Projets de Construction", href: "#projets-construction" },
      { label: "Missions de Consulting", href: "#projets-consulting" },
      { label: "Réalisations Aluminium", href: "#projets-alu" },
      { label: "Références en Distribution", href: "#projets-distrib" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
    children: [
      { label: "Formulaire de Contact", href: "#formulaire" },
      { label: "Coordonnées", href: "#coordonnees" },
      { label: "Demande de Devis", href: "#devis" },
    ],
  },
];