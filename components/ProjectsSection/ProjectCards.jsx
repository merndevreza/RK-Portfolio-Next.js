import ProjectCard from "./ProjectCard";

const ProjectCards = ({projects}) => {  
   return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
         {projects.map(project=><ProjectCard key={project?.id} project={project}/>)}
      </div>
   );
};

export default ProjectCards;