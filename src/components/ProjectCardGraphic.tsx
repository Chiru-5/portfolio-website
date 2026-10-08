import React from "react";
import { FaServer, FaScaleBalanced, FaCartShopping, FaMicrochip, FaCode } from "react-icons/fa6";
import "./styles/ProjectCardGraphic.css";

interface ProjectCardGraphicProps {
  title: string;
  category: string;
  technologies: string;
}

export const ProjectCardGraphic: React.FC<ProjectCardGraphicProps> = ({
  title,
  category,
  technologies,
}) => {
  const lowerTitle = title.toLowerCase();

  let themeClass = "theme-default";
  let mainIcon = <FaCode />;

  if (lowerTitle.includes("patient") || lowerTitle.includes("management")) {
    themeClass = "theme-patient";
    mainIcon = <FaServer />;
  } else if (lowerTitle.includes("lawezy") || lowerTitle.includes("legal")) {
    themeClass = "theme-lawezy";
    mainIcon = <FaScaleBalanced />;
  } else if (lowerTitle.includes("e-commerce") || lowerTitle.includes("ecommerce")) {
    themeClass = "theme-ecommerce";
    mainIcon = <FaCartShopping />;
  } else if (lowerTitle.includes("cpu") || lowerTitle.includes("scheduler")) {
    themeClass = "theme-cpuscheduler";
    mainIcon = <FaMicrochip />;
  }

  const techList = technologies.split(",").slice(0, 4);

  return (
    <div className={`project-graphic-card ${themeClass}`}>
      <div className="project-graphic-glow"></div>
      
      <div className="project-graphic-header">
        <span className="project-graphic-category">{category}</span>
        <div className="project-graphic-icon-wrap">{mainIcon}</div>
      </div>

      <div className="project-graphic-body">
        <h3 className="project-graphic-title">{title}</h3>
      </div>

      <div className="project-graphic-footer">
        {techList.map((tech, idx) => (
          <span key={idx} className="project-graphic-tech-pill">
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardGraphic;
