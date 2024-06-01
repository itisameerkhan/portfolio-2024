import "./Internship.scss";
import { useEffect } from "react";

const Internship = () => {
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
    <div className="internships-main">
      <p className="i-1">Internships and certificates</p>
      <div className="int-desc">
        <div>
          <p className="i-d-1">Accenture</p>
          <p className="i-d-2">Salesforce Developer</p>
          <p>05/2024 - 07/2024</p>
          <p>
            Assisted in Salesforce administration tasks, including setup,
            integration, and Trailmix integration for streamlined workflows{" "}
          </p>
          <p>
            Gained hands-on experience in Salesforce development, mastering Apex
            programming, Visualforce programming, and Lightning Web Components
            development within a dynamic and collaborative environment.
          </p>
        </div>
        <div>
          <p className="i-d-1">Enthu Technology</p>
          <p className="i-d-2">Trainee</p>
          <p>09/2022 - 10/2022 </p>
          <p>
            Acquired proficiency in Eagle and Proteus software for PCB design.
          </p>
          <p>
            Developed a variety of PCB layouts to showcase practical design
            skills. Executed PCB fabrication processes, producing tangible
            prototypes from designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internship;
