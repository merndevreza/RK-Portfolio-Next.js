import SectionTitle from "../SectionTitle";
import TestimonialCarousel from "./TestimonialCarousel";
const TestimonialSection = ({ testimonialData }) => {
  return (
    <section className="section-padding">
      <SectionTitle
        title={testimonialData?.sectionTitle}
        subtitle={testimonialData?.subtitle}
      />
      <TestimonialCarousel testimonials={testimonialData?.testimonials}/> 
    </section>
  );
};

export default TestimonialSection;
