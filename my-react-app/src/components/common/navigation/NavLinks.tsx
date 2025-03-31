import { Link } from "react-router-dom";
import "./NavLinks.scss";

function NavLinks() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
    </nav>
  );
}

export default NavLinks;
