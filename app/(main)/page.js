import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import CTASection from "@/components/CTASection/CTASection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import { getAboutData, getCTAData, getHeroData, getProjectData, getServicesData, getTestimonialData } from "../data/landing";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";

export default function Home() { 
  return (
    <main>
      <HeroSection heroData={getHeroData} />
      <AboutSection aboutData={getAboutData} />
      <ServicesSection servicesData={getServicesData} />
      <ProjectsSection projectData={getProjectData} />
      <TestimonialSection testimonialData={getTestimonialData}/>
      <CTASection ctaData={getCTAData} />
    </main>
  );
}
