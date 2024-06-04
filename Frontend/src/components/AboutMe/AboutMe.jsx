import { useEffect } from "react";
import "./AboutMe.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    scrollTop();
    AOS.init();
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="about-me-1">
      <div className="about-me-left">
        <img
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717145865/Portfolio/uyl5caoqrnuaoezsq2rc.jpg"
          alt=""
          className="about-me-img"
        />
        <div className="aml-1" data-aos="fade-up">
          <p className="aml-1-title">Education</p>
          <div>
            <p>Bannari Amman Institute of Technology</p>
            <p>B.E & Electrical and Electronics Engineering</p>
            <p>2020-2024</p>
            <p>8.11 CGPA</p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717145878/Portfolio/ydab9w2al9sqxeqb361v.jpg"
          alt=""
          className="about-me-img"
          data-aos="fade-up"
        />
        <div className="aml-1 aml-2" data-aos="fade-up">
          <div>
            <p>Exercise as a Daily Part of My Routine</p>
            <p style={{ width: "80%" }}>
              I incorporate daily running into my routine for exercise. Running
              not only keeps me physically fit but also helps clear my mind,
              enhancing my focus and productivity. This balance of physical
              activity and mental work ensures I stay healthy and motivated.
            </p>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717145876/Portfolio/vlgoruf8pckvmebnphev.jpg"
          alt=""
          className="about-me-img"
          data-aos="fade-up"
        />
      </div>
      <div className="about-me-right">
        <p className="amr-1">
          Hey there! Let me quickly tell you about myself and what I enjoy
          doing.
        </p>
        <img
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717145872/Portfolio/pdlvww9skqvcnupjqrd4.jpg"
          alt=""
          className="about-me-img"
        />
        <div className="amr-2" data-aos="fade-up">
          <p>The leap over to web development.</p>
          <p>
            I decided to explore web development, naturally gravitating towards
            frontend development due to my inclination towards visual expression
            and design. Building engaging user interfaces with HTML, CSS, and
            React has been both fulfilling and creatively stimulating.
          </p>
          <p>
            As a MERN stack developer, I create full-stack applications using
            MongoDB, Express, React, and Node.js. Additionally, I solve complex
            problems using Java, C, C++, and MySQL, ensuring robust and
            efficient solutions for various challenges.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717482476/vzpmpdzksh2v0mtfqxzm.jpg"
          alt=""
          className="about-me-img"
          data-aos="fade-up"
        />
        <div className="amr-2" style={{ marginTop: 0 }} data-aos="fade-up">
          <p>What I’m doing now.</p>
          <p>
            I am currently learning MERN stack development, diving deep into
            MongoDB, Express, React, and Node.js to build full-stack
            applications. Enhancing my skills in both frontend and backend
            development.
          </p>
          <p>
            Alongside this, I am honing my problem-solving abilities with Java,
            C, C++, and MySQL, tackling complex challenges and optimizing
            solutions. I am open to work and eager to apply my growing
            expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
