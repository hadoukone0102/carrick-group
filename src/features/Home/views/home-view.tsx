import Banner from "@/features/shared/components/banner";
import CarrickServices from "@/features/services/views/CarrickServices";
import CarrickAbout from "@/features/services/views/CarrickAbout";
import CarrickCompanies from "@/features/services/views/CarrickCompanies";
import CarrickContact from "@/features/services/views/CarrickContact";
import CarrickPartners from "@/features/services/views/CarrickPartners";
import CarrickProjects from "@/features/services/views/CarrickProjects";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Banner */}
      <Banner />

      {/* 2. Nos Entreprises — les 5 filiales du groupe */}
      <CarrickCompanies />

      {/* 3. Nos Services — reformulés orientés client */}
      <CarrickServices />

      {/* 4. À Propos — vision, mission, valeurs */}
      <CarrickAbout />

      {/* 5. Projets & Réalisations */}
      <CarrickProjects />

      {/* 6. Engagements + Partenaires */}
      <CarrickPartners />

      {/* 7. Formulaire de devis / Contact */}
      <CarrickContact />
    </div>
  );
}