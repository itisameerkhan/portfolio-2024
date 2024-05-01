import "./Hero.scss";
import { useEffect } from "react";
import { animateFn } from "../../constants/animate";

const Hero = () => {
  useEffect(() => {
    animateFn();
  }, []);
  return (
    <div className="hero">
      <canvas></canvas>
      <div className="hero-inner">
        <p className="name">Ameer khan B</p>
      </div>
    </div>
  );
};

export default Hero;
