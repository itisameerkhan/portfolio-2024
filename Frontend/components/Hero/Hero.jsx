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

  const handleMouseOver = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let iterations = 0;

    const interval = setInterval(() => {
      const newName = name
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return name[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
      setName(newName);

      if (iterations >= name.length) clearInterval(interval);
      iterations += 1/3;
    }, 30);
  };

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
          {/* <p className="name">Ameer khan</p> */}
          <p
            className="hacker"
            onMouseOver={handleMouseOver}
            data-value="Ameer khan"
          >
            {name}
          </p>
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
