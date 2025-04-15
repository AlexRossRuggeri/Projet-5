import "./Profile.scss";

interface profileProps {
  name: string;
  picture: string;
}

function Profile({ name, picture }: profileProps) {
  return (
    <div className="host-profile">
      <div className="host-profile__name">{name}</div>
      <img
        src={picture}
        alt={`photo de ${name}`}
        className="host-profile__picture"
      />
    </div>
  );
}

export default Profile;
