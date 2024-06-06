import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © 2024
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <span>Ameer khan</span>
        </a>
      </p>
      <div>
        <a href="https://www.instagram.com/notrealkhan" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://x.com/itisameerkhan" target="_blank">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/itisameerkhan/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://codepen.io/itisameerkhan" target="_blank">
          <i className="fa-brands fa-codepen"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
