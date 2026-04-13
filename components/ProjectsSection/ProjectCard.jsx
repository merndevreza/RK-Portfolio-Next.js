import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const ProjectCard = ({ project }) => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <Link href={project?.liveUrl}>
        <CardHeader className="p-0 ">
         <div className="h-[350px] xl:h-[490px] relative overflow-hidden w-full bg-[#FFEBDB] rounded-lg">
          <Image className="absolute -bottom-[120px] w-[200px] xl:w-[274px] left-[240px] sm:left-[180px] xl:left-[144px]" src={project?.img} alt={project?.title} />
          <Image className="absolute top-[20px] lg:top-[40px] xl:top-[85px]  w-[200px] xl:w-[274px] left-5 xl:left-[40px]" src={project?.img} alt={project?.title} /> 
         </div>
          <CardTitle className="pt-6 xl:pt-[35px] ">
            <span className="xl:text-[19px] text-primary font-normal mb-2 xl:mb-5 inline-block">{project?.category}</span>
            <span className="text-lg font-bold block xl:text-[24px]">{project?.title}</span> 
          </CardTitle>
        </CardHeader> 
      </Link>
    </Card>
  );
};

export default ProjectCard;
