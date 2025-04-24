import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import logements from "../../data/listingsData.json";
import Slideshow from "../../components/common/Slideshow/Slideshow";
import Collapse from "../../components/common/Collapse/collapse";
import Profile from "../../components/common/Profile/Profile";
import Badge from "../../components/common/Badge/Badge";
import StarRating from "../../components/common/Ranking/Ranking";

import "./HousingFile.scss";

function FicheLogement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  const [openId, setOpenId] = useState<string | null>(null);
  const [firstname, lastname] = logement?.host.name.split(" ") ?? ["", ""];

  if (!logement) {
    return <Navigate to="*" />;
  }

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Slideshow images={logement.pictures} />

      <div className="housing-file">
        <div className="housing-file__header">
          <div className="housing-file__info">
            <h1 className="housing-file__title">{logement.title}</h1>
            <h2 className="housing-file__location">{logement.location}</h2>
          </div>

          <Badge tags={logement.tags} />
        </div>

        <div className="housing-file__meta">
          <Profile
            firstname={firstname}
            lastname={lastname}
            picture={logement.host.picture}
          />

          <StarRating rating={logement.rating} />
        </div>
      </div>

      <div className="housing-file__details">
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
            <ul className="housing-file__equipment-list">
              {logement.equipments.map((item, index) => (
                <li className="housing-file__equipment-item" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          }
          isOpen={openId === "equipments"}
          onClick={() => handleToggle("equipments")}
        />
      </div>
    </>
  );
}

export default FicheLogement;
