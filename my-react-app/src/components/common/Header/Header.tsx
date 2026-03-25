import { Link } from "react-router-dom";
import logo from "../../../assets/LOGO.svg";
import NavLinks from "../NavLinks/NavLinks";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
      </Link>
      <NavLinks />
    </header>
  );
}

export default Header;
