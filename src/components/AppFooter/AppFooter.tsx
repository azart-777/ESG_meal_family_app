import React from "react";
import "./AppFooter.scss";
import { social, vectors } from "../../assets/images";

export const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <p className="footer__text">&copy;2024. Cheap-IT Family</p>
          <p className="footer__text">Privacy Policy</p>
          <p className="footer__text">
            <img className="footer__icon-map" src={vectors.footer_map_point} alt="icom_map" /> Made in Ukraine
          </p>
        </div>
        <div className="footer__social">
          <a className="footer__link" href="https://www.facebook.com/profile.php?id=61566919077712" target="_blank" rel="noopener noreferrer">
            <img src={social.facebook} alt="Facebook" className="footer__icon" />
          </a>
          {/*<a className="footer__link" href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">*/}
          {/*  <img src={social.apple} alt="App Store" className="footer__icon" />*/}
          {/*</a>*/}
          <a className="footer__link" href="https://www.instagram.com/cheap_it_family/" target="_blank" rel="noopener noreferrer">
            <img src={social.instagram} alt="Instagram" className="footer__icon" />
          </a>
          <a className="footer__link" href="https://www.linkedin.com/company/chi-f" target="_blank" rel="noopener noreferrer">
            <img src={social.linkedin} alt="LinkedIn" className="footer__icon" />
          </a>
          {/*<a className="footer__link" href="https://play.google.com" target="_blank" rel="noopener noreferrer">*/}
          {/*  <img src={social.google} alt="Google Play" className="footer__icon" />*/}
          {/*</a>*/}
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
