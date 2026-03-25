import logements from "../../../../data/listingsData.json";
import Card from "../Card/Card";
import "./ListingsSection.scss";

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
