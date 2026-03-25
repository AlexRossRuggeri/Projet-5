import logo from "../../../assets/LOGO.svg";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" className="footer__logo" />
      <p className="footer__text">
        &copy; {currentYear} Kasa. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
