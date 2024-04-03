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
        <div className="hero-inner-content">
          <h1>Ameer khan</h1>
          <button>click me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
