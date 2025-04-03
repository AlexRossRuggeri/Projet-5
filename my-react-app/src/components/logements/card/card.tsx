import { Link } from "react-router-dom";
import "./Card.scss";

interface Logement {
  id: string;
  title: string;
  cover: string;
}

interface CardProps {
  logement: Logement;
}

function Card({ logement }: CardProps) {
  return (
    <Link to="/fiche-logement" className="card">
      <div
        className="card__cover"
        style={{ backgroundImage: `url(${logement.cover})` }}
      >
        <h3 className="card__title">{logement.title}</h3>
      </div>
    </Link>
  );
}

export default Card;
