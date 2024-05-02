import "./Header.scss";
import aksvg from "../../src/assets/ak.svg";

const Header = () => {
  return (
    <div className="header">
      <a href="#">
        <img src={aksvg} alt="logo" />
      </a>
      <a href="#about">
        <button>
          <span className="span-mother">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </span>
          <span className="span-mother2">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </span>
        </button>
      </a>
      <button>
        <span className="span-mother">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </span>
        <span className="span-mother2">
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
        </span>
      </button>
      <button>
        <span className="span-mother">
          <span>w</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </span>
        <span className="span-mother2">
          <span>w</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </span>
      </button>
    </div>
  );
};

export default Header;
