import React from "react";
import { ImLinkedin, ImTwitter } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-links">
      <a
        class="link"
        href="https://www.linkedin.com/in/aakarsha-kodthiwada-5566bb184/"
      >
        <ImLinkedin />
      </a>
      <a class="link" href="https://github.com/Aakarshashetty">
        <BsGithub />
      </a>
      <a class="link" href="https://twitter.com/Aakarsha_shetty">
        <ImTwitter />
      </a>
    </div>
    <p className="copyright">© 2023 VelvetGlow</p>
    </div>
  );
};

export default Footer;
