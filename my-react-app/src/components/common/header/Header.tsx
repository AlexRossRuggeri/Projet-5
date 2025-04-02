import logo from "../../../assets/LOGO.svg";
import NavLinks from "../navigation/NavLinks";
import "./Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      <NavLinks />
    </header>
  );
}

export default Header;
