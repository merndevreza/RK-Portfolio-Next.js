import SectionTitle from "../SectionTitle";
import { ContactForm } from "./ContactForm";

const CTASection = ({ctaData}) => {
   return (
      <section id="contact" className="max-w-[930px] mx-auto px-4 xl:px-7 section-padding">
         <SectionTitle title={ctaData?.sectionTitle} subtitle={ctaData?.subtitle} />
         <ContactForm/>
      </section>
   );
};

export default CTASection;