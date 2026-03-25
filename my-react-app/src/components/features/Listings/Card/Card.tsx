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
    <Link to={`/fiche-logement/${logement.id}`} className="card">
      <div className="card__image-container">
        <img
          src={logement.cover}
          alt={logement.title}
          className="card__image"
        />
        <div className="card__overlay" />

        <h3 className="card__title">{logement.title}</h3>
      </div>
    </Link>
  );
}

export default Card;
