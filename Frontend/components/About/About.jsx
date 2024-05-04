import "./About.scss";
import { cloudinary_img } from "../../utils/constants";

const About = () => {
  return (
    <div id="about">
      <div className="about-inner">
        <div className="about-main">
          <p className="word">
            I'm Ameer khan B - Driven Electrical Engineering student with a
            passion for software development. Currently exploring the MERN stack
            and actively seeking opportunities to learn and grow in the dynamic
            IT industry . Open to connect and collaborate with fellow tech
            enthusiasts!
          </p>
        </div>
        <div className="about-img">
          <img
            src="https://res.cloudinary.com/dnyehgbeu/image/upload/f_auto,q_auto/ys2vm23pqvr3lbliruhu"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dnyehgbeu/image/upload/f_auto,q_auto/hjloh0vurdhuqxlamvua"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dnyehgbeu/image/upload/f_auto,q_auto/jltrwq1agrjxkwtsrp8x"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dnyehgbeu/image/upload/f_auto,q_auto/mioojjwam8nac6t04dn5"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
