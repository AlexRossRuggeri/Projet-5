import "./Profile.scss";

interface profileProps {
  firstname: string;
  lastname: string;
  picture: string;
}

function Profile({ firstname, lastname, picture }: profileProps) {
  return (
    <div className="host-profile">
      <div className="host-profile__name">
        {firstname}
        <br />
        {lastname}
      </div>
      <img
        src={picture}
        alt={`photo de ${firstname}${lastname}`}
        className="host-profile__picture"
      />
    </div>
  );
}

export default Profile;
