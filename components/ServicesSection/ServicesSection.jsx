import SectionTitle from "../SectionTitle";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ servicesData }) => {
  return (
    <section id="service" className="container section-padding">
      <SectionTitle
        title={servicesData?.sectionTitle}
        subtitle={servicesData?.subtitle}
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] 2xl:gap-[30px] mt-16">
        {servicesData?.services.map((service) => (
          <ServiceCard key={service?.title} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
