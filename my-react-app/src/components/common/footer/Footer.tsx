import logo from "../../../assets/LOGO.svg";
import "./footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      <p>&copy; {currentYear} Kasa. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
