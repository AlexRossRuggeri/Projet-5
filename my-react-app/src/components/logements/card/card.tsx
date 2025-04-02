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
    <article className="card">
      <div
        className="card__cover"
        style={{ backgroundImage: `url(${logement.cover})` }}
      >
        {/* <div className="card__overlay" /> */}
        <h3 className="card__title">{logement.title}</h3>
      </div>
    </article>
  );
}

export default Card;
