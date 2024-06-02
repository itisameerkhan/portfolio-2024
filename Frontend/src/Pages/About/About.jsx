import AboutMe from "../../components/AboutMe/AboutMe";
import Footer from "../../components/Footer/Footer";
import "./About.scss";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-overview-1">
        <p>Good morning!</p>
        <p>I'm Ameer Khan, an MERN Stack developer.</p>
      </div>
      <div className="about-me-main">
        <AboutMe />
      </div>
    </div>
  );
};

export default About;
