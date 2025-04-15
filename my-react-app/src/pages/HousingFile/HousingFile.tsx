import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import logements from "../../data/listingsData.json";
import Slideshow from "../../components/common/Slideshow/Slideshow";
import Collapse from "../../components/common/Collapse/collapse";
import Profile from "../../components/common/Profile/Profile";
import Badge from "../../components/common/Badge/Badge";
import StarRating from "../../components/common/Ranking/Ranking";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  const [openId, setOpenId] = useState<string | null>(null);

  if (!logement) {
    return <Navigate to="*" />;
  }

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Slideshow images={logement.pictures} />
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>

      <Profile name={logement.host.name} picture={logement.host.picture} />

      <Badge tags={logement.tags} />

      <StarRating rating={logement.rating} />

      <Collapse
        id="description"
        title="Description"
        children={logement.description}
        isOpen={openId === "description"}
        onClick={() => handleToggle("description")}
      />

      <Collapse
        id="equipments"
        title="Équipements"
        children={
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
        isOpen={openId === "equipments"}
        onClick={() => handleToggle("equipments")}
      />
    </>
  );
}

export default FicheLogement;
