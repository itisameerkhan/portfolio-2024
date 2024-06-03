import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [btn, setBtn] = useState(false);

  return (
    <div className="nav-bar">
      <div className="nav-bar-menu" onClick={() => setBtn(!btn)}>
        <div className={`nav-bar-line ${btn ? "btn-clicked-left" : ""}`}></div>
        <div className={`nav-bar-line ${btn ? "btn-clicked-right" : ""}`}></div>
      </div>
      <div
        className="nav-bar-main"
        style={{ display: `${btn ? "block" : "none"}` }}
      ></div>
      <div className={`nav-bar-link ${btn ? "btn-clicked" : ""}`}>
        <Link to={"/"} onClick={() => setBtn(false)}>
          Home
        </Link>
        <Link to={"/about"} onClick={() => setBtn(false)}>
          About
        </Link>
        <Link to={"/projects"} onClick={() => setBtn(false)}>
          Projects
        </Link>
        <Link to={"/socials"} onClick={() => setBtn(false)}>
          Socials
        </Link>
        <Link to={"/internships"} onClick={() => setBtn(false)}>
          Internships
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
