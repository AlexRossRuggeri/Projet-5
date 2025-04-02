import logements from "../../../data/logements.json";
import Card from "../card/Card";
import "./Listings.scss";

function Listings() {
  return (
    <section className="listings">
      <div className="listings__grid">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </section>
  );
}

export default Listings;
