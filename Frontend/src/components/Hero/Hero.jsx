import "./Hero.scss";
import underline from "../../assets/underline.svg";
import img2 from "../../imgs/img2.jpg";
import img3 from "../../imgs/img3.jpg";
import img4 from "../../imgs/img4.jpg";

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
          src="https://res.cloudinary.com/dnyehgbeu/image/upload/v1717145878/Portfolio/ydab9w2al9sqxeqb361v.jpg"
          alt="img"
        />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <img src={img4} alt="img" />
      </div>
    </div>
  );
};

export default Hero;
