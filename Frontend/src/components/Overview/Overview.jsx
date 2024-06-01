import "./Overview.scss";
import { Link } from "react-router-dom";
import webimg1 from "../../imgs/webimg1.png";
import img1 from "../../imgs/img1.png";

const Overview = () => {
  return (
    <div className="overview">
      <Link to={"/about"} className="about">
        <div className="about-me">
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
          <div className="layout-1"></div>
          <p>Learn more about me</p>
        </div>
      </Link>
      <Link className="b" to={"/projects"}>
        <div className="projects">
          <p>Projects</p>
          <p>MERN, Machine Learning, Core, Java, more</p>
          <img src={webimg1} alt="" />
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
        </div>
      </Link>
      <Link className="socials" to={"/socials"}>
        <div className="c">
          <img src={img1} alt="" />
          <div>
            <p>@itisameerkhan</p>
            <button>follow</button>
          </div>
        </div>
      </Link>
      <Link className="skills" to={"/skills"}>
        <p>Skills</p>
        <p>My Skills and Tools used on daily basis</p>
        <div className="skill-icons-w">
          <img src="https://skillicons.dev/icons?i=react&theme=dark" alt="" />
          <div className="skill-icon-1">
            <img
              src="https://skillicons.dev/icons?i=nodejs&theme=dark"
              alt=""
            />
            <img
              src="https://skillicons.dev/icons?i=express&theme=dark"
              alt=""
            />
          </div>
          <div className="skill-icon-2">
            <img
              src="https://skillicons.dev/icons?i=mongodb&theme=dark"
              alt=""
            />
            <img src="https://skillicons.dev/icons?i=java&theme=dark" alt="" />
          </div>
        </div>
        <span className="material-symbols-outlined north-east">north_east</span>
      </Link>
      <Link className="internships" to={"/internships"}>
        <p>Internships</p>
        <img src={img1} alt="" />
        <p>Internship Experience and Certificates</p>
        <span className="material-symbols-outlined north-east">north_east</span>
      </Link>
    </div>
  );
};

export default Overview;
