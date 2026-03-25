import { Link } from "react-router-dom";
import "./NavLinks.scss";

function NavLinks() {
  return (
    <nav className="navigation">
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default NavLinks;
