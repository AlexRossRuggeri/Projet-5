import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
  return (
    <div className="error-section">
      <h2 className="error-section__title">404</h2>
      <p className="error-section__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error-section__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
