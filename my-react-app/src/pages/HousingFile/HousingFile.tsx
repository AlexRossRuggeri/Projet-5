import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import logements from "../../data/listingsData.json";
import Slideshow from "../../components/common/Slideshow/Slideshow";
import Collapse from "../../components/common/Collapse/collapse";

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
    <div>
      <Slideshow images={logement.pictures} />
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
    </div>
  );
}

export default FicheLogement;
