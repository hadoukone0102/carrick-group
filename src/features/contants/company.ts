import { Company } from "../Home/types/company.type";

export const companies: Company[] = [
  {
    id: "01",
    name: "Carrick Construction",
    tagline: "Bâtir avec rigueur, construire avec vision",
    description:
      "Construction de bâtiments résidentiels, commerciaux et institutionnels, rénovation, terrassement et aménagement paysager.",
    services: [
      "Bâtiments clés en main",
      "Rénovation & réhabilitation",
      "Terrassement",
      "Relevés topographiques",
    ],
    img: "/A/building.jpeg",
    color: "#68277f",
    bg: "from-stone-900 to-stone-800",
  },
  {
    id: "02",
    name: "Carrick Alu",
    tagline: "L'esthétique au service de la performance",
    description:
      "Menuiserie aluminium moderne et design : fenêtres, portes, balcons vitrés, stores électriques et escaliers vitrés.",
    services: [
      "Fenêtres françaises & coulissantes",
      "Portes coulissantes",
      "Balcons vitrés inox",
      "Stores électriques",
    ],
    color: "#7EB8D4",
    bg: "from-slate-900 to-slate-800",
  },
  {
    id: "03",
    name: "Carrick Agro Retail",
    tagline: "Fiabilité, traçabilité, performance logistique",
    description:
      "Distribution agroalimentaire et industrielle avec un souci constant de qualité, conformité et logistique maîtrisée.",
    services: [
      "Distribution agroalimentaire",
      "Distribution industrielle",
      "Traçabilité produits",
      "Approvisionnement régulier",
    ],
    color: "#7EC88A",
    bg: "from-emerald-950 to-emerald-900",
    img: "/A/retail.jpeg",
  },
  {
    id: "04",
    name: "Carrick Conseil",
    tagline: "Structurez, sécurisez et optimisez vos projets",
    description:
      "Cabinet de conseil stratégique : montage de projets, investissement, marchés financiers, crowdfunding immobilier & SCPI.",
    services: [
      "Montage de projets",
      "Consulting stratégique",
      "Marchés financiers",
      "Crowdfunding & SCPI",
    ],
    color: "#B87ED4",
    bg: "from-purple-950 to-purple-900",
  },
  {
    id: "05",
    name: "Carrick Point d'Accès aux Droits",
    tagline: "Sécurisez vos démarches, protégez vos intérêts",
    description:
      "Accompagnement juridique et administratif : conseil, rédaction de contrats, création d'entreprise, assistance fiscale et sociale.",
    services: [
      "Conseil juridique",
      "Rédaction de contrats",
      "Création d'entreprise",
      "Recouvrement & assistance sociale",
    ],
    color: "#D4A27E",
    bg: "from-amber-950 to-amber-900",
    img: "/A/droit.jpeg",
  },
];