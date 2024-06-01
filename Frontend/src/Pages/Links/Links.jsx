import Social from "../../components/Social/Social";
import { social } from "../../utils/constants";
import "./Links.scss";
import { useEffect } from "react";

const Links = () => {
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollTop();
  }, []);
  
  return (
    <div className="skills-main">
      <p className="s-t-1">SOCIALS</p>
      <p className="s-title">My profiles and social accounts</p>
      <div className="l-div">
        {social.map((data) => (
          <Social data={data} />
        ))}
      </div>
    </div>
  );
};

export default Links;
