 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionTitle from "../SectionTitle";
import ProjectCards from "./ProjectCards";

const ProjectsSection = ({ projectData }) => {
  const categories = projectData?.projects.map((item) => item?.category);
  const triggers = [...new Set(categories)];
  const getProjectsByCategory = (category) => {
    return projectData.projects.filter(
      (project) => project.category === category
    );
  };
  return (
    <section className="container section-padding">
      <SectionTitle
        title={projectData?.sectionTitle}
        subtitle={projectData?.subtitle}
      />
      <Tabs defaultValue="all" className="justify-center flex flex-col ">
        <TabsList className="bg-transparent  text-black gap-2 lg:gap-3 2xl:gap-4 mt-[70px] mb-[80px] flex-wrap">
          <TabsTrigger className="data-[state=active]:bg-primary bg-offwhite data-[state=active]:shadow-none border text-lg lg:text-xl 2xl:text-2xl data-[state=active]:text-white font-normal" value="all">All</TabsTrigger>
          {triggers?.map((item) => (
            <TabsTrigger className="data-[state=active]:bg-primary  bg-offwhite  data-[state=active]:shadow-none border text-lg lg:text-xl 2xl:text-2xl data-[state=active]:text-white font-normal"  key={item} value={item.toLowerCase()}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="all">
          {projectData?.projects.length > 0 && (
            <ProjectCards projects={projectData?.projects} />
          )}
        </TabsContent>
        {triggers.map((category, index) => {
          const projects = getProjectsByCategory(category);
          return (
            <TabsContent key={index} value={category.toLowerCase()}>
              <ProjectCards projects={projects} />
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default ProjectsSection;
