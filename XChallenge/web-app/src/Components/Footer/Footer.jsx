import React, { useContext } from "react";
import Title from "../Title/Title";
import "./Footer.css";

import logoIcon from "../../Assets/Icons/logo-icon-export.png";
import logoFacebook from "../../Assets/Icons/face.png";
import logoTwitter from "../../Assets/Icons/twitter.png";
import logoYouTube from "../../Assets/Icons/youtube.png";
import { ThemeContext } from "../../Context/ThemeContext";

const Footer = ({ backColor, color }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={{ backgroundColor: backColor }} className="footer-flex">
      <div className="column-xchallenge">
        <div className="tit-column">
          <img src={logoIcon} id={theme === "dark" ? "logo-dark-mode" : null} />
          <Title textTitle={"XCHALLENGE"} colorTitle={color} />
        </div>

        <div className="links-footer">
          <a style={{ color: color }}>Skills</a>
          <a style={{ color: color }}>Parceiros</a>
          <a style={{ color: color }}>Visitantes</a>
          <a style={{ color: color }}>Site: ###</a>
          <a style={{ color: color }}>Area Restrita: ###</a>
        </div>
      </div>

      <div className="column-redes-sociais">
        <Title textTitle={"Redes Sociais"} colorTitle={color} />

        <div className={theme === "dark" ? "redes-dark" : "redes"}>
          <a id="face">
            {" "}
            <img src={logoFacebook} alt="" /> Facebook
          </a>
          <a id="twitter" href="">
            {" "}
            <img src={logoTwitter} alt="" /> Twitter
          </a>
          <a id="youTube" href="">
            {" "}
            <img src={logoYouTube} alt="" /> YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
