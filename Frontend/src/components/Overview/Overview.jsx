import "./Overview.scss";
import img5 from "../../imgs/img5.jpg";
import { Link } from "react-router-dom";
const Overview = () => {
  return (
    <div className="overview">
      {/* <div className="about-me">
        <Link to={"/about"}>
          <span className="material-symbols-outlined north-east">north_east</span>
          <div className="layout-1"></div>
          <img src={img5} alt="" />
          <p>Learn more about me</p>
        </Link>
      </div> */}
      <Link to={"/about"} className="about">
        <div className="about-me">
          <span className="material-symbols-outlined north-east">
            north_east
          </span>
          <div className="layout-1"></div>
          <p>Learn more about me</p>
        </div>
      </Link>
      <div className="social"></div>
      <div className="skills"></div>
      <div className="internships"></div>
      <div className="projects"></div>
    </div>
  );
};

export default Overview;
