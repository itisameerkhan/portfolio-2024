import "./Hero.scss";
import underline from "../../assets/underline.svg";
import img22 from "../../imgs/img22.jpg";
import img23 from "../../imgs/img23.jpg";
import img24 from "../../imgs/img24.jpg";
import img25 from "../../imgs/img25.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-desc">
        Hey, I'm{" "}
        <span>
          Ameer Khan!
          <img src={underline} alt="" />
        </span>{" "}
        Welcome to my corner of the internet!
      </p>
      <div className="hero-img">
        <img
          src={img25}
          alt="img"
        />
        <img src={img22} alt="img" />
        <img src={img23} alt="img" />
        <img
          src={img24}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
