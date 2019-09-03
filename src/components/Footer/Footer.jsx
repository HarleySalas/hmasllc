import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container footer__container--left">
          &copy;&nbsp;{new Date().getFullYear()}&nbsp;HM Accounting Services,
          LLC
        </div>
        <div className="footer__container footer__container--right">
          Website by <a href="http://harleysalas.com" className="footer__link" rel="noopener noreferrer" target="_blank">Harley Salas</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
