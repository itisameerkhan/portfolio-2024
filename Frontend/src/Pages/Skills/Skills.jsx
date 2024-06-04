import SkillIcons from "../../components/SkillIcons/SkillIcons";
import { skills } from "../../utils/constants";
import "./Skills.scss";
import { useEffect } from "react";

const Skills = () => {
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
    <div className="skills-main">
      <p className="s-t-1">SKILLS</p>
      <p className="s-title">Hardware and software I use on a daily basis.</p>
      <div className="skills-main-1">
        {skills.map((data) => (
          <SkillIcons key={data} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
