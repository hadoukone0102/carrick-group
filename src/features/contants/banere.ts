type bannertype = {
    id?:string
    img?:string;
    tag?:string;
    title?:string;
    highlight?:string;
    description?:string;
    path?:string;
    cta?:string;
}

export const BANNER: bannertype[] = [
    {
        img: "/A/droit.jpeg",
        tag: "Carrick Group",
        title: "CARRICK POINT D'ACCÈS AUX DROITS",
        highlight: "Vos droits, notre priorité",
        description: "Accompagnement juridique et administratif personnalisé. Nous vous guidons dans l'acquisition de vos droits, la rédaction de documents officiels et vous formons pour mieux vous défendre.",
        path: "#a-propos",
        // cta: "Consulter un expert",
    },
    {
        img: "/A/building.jpeg",
        tag: "Carrick Group",
        title: "BUSINESS-CONSTRUCTION",
        highlight: "Bâtissez avec confiance",
        description: "De la conception à la réalisation, nous prenons en charge vos projets immobiliers. Plans 3D/2D, construction, gestion immobilière et menuiserie aluminium pour concrétiser votre vision.",
        path: "#a-propos",
        // cta: "Démarrer mon projet",
    },
    {
        img: "/A/m-a.jpeg",
        tag: "Carrick Group",
        title: "MENUISERIE ALUMINIUM",
        highlight: "L'aluminium au service de votre espace",
        description: "Portes coulissantes, fenêtres françaises, stores électriques, escaliers et balcons vitrés — des solutions modernes et durables pour sublimer votre intérieur et votre extérieur.",
        path: "#a-propos",
        // cta: "Voir nos réalisations",
    },
    {
        img: "/A/retail.jpeg",
        tag: "Carrick Group",
        title: "CARRICK AGRO RETAIL",
        highlight: "L'agriculture, moteur de votre croissance",
        description: "Semences, intrants, matériel agricole et produits alimentaires frais — nous accompagnons agriculteurs et entrepreneurs avec des solutions complètes pour une agriculture performante.",
        path: "#a-propos",
        // cta: "Explorer nos produits",
    },
]