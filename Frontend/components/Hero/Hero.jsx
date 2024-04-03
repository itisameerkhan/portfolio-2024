import "./Hero.scss";
import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const moveAndRotateBox = () => {
    gsap.to(".box", {
      x: "+=400",
      y: "+=300",
      duration: 3,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(".box", {
      x: "+=800",
      y: "-=300",
      duration: 4,
      yoyo: true,
      delay: 2,
      repeat: -1,
    });
    gsap.to(".box-2", {
      x: "+=900",
      y: "+=150",
      duration: 6,
      yoyo: true,
      repeat: -1,
    });
  };
  useEffect(() => {
    moveAndRotateBox();
  }, []);
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="box"></div>
        <div className="box-2"></div>
        <div className="hero-inner-content">
            <h1>Ameer khan</h1>
            <button>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
