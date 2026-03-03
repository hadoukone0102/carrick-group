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
      <Banner />

      <section id="societes">
        <CarrickCompanies />
      </section>

      <section id="services">
        <CarrickServices />
      </section>

      <section id="a-propos">
        <CarrickAbout />
      </section>

      <section id="projets">
        <CarrickProjects />
      </section>

      <section id="partenaires">
        <CarrickPartners />
      </section>

      <section id="contact">
        <CarrickContact />
      </section>
    </div>
  );
}