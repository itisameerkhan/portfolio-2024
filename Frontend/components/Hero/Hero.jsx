import "./Hero.scss";
import "./Button.css";
import { useEffect, useRef, useState } from "react";
import { animateFn } from "../../constants/animate";
import { gsap } from "gsap";
import SplitType from "split-type";
import Typed from "typed.js";

const Hero = () => {
  const typingRef = useRef(null);

  const [name, setName] = useState("Ameer khan");

  useEffect(() => {
    animateFn();

    let typeSplit = new SplitType("[data-animate]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[data-animate] .char", {
      y: "100%",
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
      stagger: 0.1,
    });

    const options = {
      strings: [
        "Electrical Engineer",
        "Passionate MERN Stack Developer",
        "Software Engineer",
        "Tech Enthusiasts",
        "Problem Solver",
        "Freelancer",
        "React Developer",
        "Frontend Developer",
        "Backend Developer",
        "Proud Indian",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <canvas></canvas>
      <div className="hero-inner">
        <div>
          <p className="name">Ameer khan</p>
        </div>
        <div className="hero-about-main">
          <p className="hero-about line">Iam a </p>
          <p ref={typingRef} className="hero-about typed"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
