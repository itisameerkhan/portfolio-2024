import { useEffect } from "react";
import "./Projects.scss";
import ProjectContainer from "../../components/ProjectContainer/ProjectContainer";
import { projectDescription } from "../../utils/constants";

const Projects = () => {
  
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollTop();
  }, []);

  return (
    <div className="projects-main">
      <p className="p-t-1">PROJECTS</p>
      <p className="projects-title">A selection of my favorite works.</p>
      {projectDescription.map((data) => (
        <ProjectContainer data={data} key={data.img} />
      ))}
    </div>
  );
};

export default Projects;
