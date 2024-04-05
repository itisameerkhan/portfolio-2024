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
      <div className="hero-inner"></div>

    </div>
  );
};

export default Hero;
