import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { Progress } from "@/components/ui/progress";

const AboutSection = ({ aboutData }) => {
  return (
    <section id="about" className="container grid lg:grid-cols-10 items-center section-padding gap-12">
      <div className="lg:col-span-4 text-center lg:text-left">
        <Image className="mx-auto" src={aboutData?.img} alt={aboutData?.alt} />
      </div>
      <div className="lg:col-span-6 ">
        <SectionTitle
          title={aboutData?.sectionTitle}
          subtitle={aboutData?.subtitle}
          leftAlignment={true}
        />
       <div className="mt-6 mx-auto lg:mx-0 max-w-[730px]">
       {aboutData?.skills.map((item) => (
          <div className="space-y-2 mb-2" key={item?.name}>
            <strong>{item?.name}</strong>
            <Progress className="bg-offwhite" value={item?.percentage} />
          </div>
        ))}
       </div>
      </div>
    </section>
  );
};

export default AboutSection;
