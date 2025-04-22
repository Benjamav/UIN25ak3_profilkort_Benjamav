import React from "react";
import "./profilkort.css";

// en const som definerer ProfileCard komponentet.
const ProfileCard = ({ name, email, imageUrl }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={imageUrl} alt={`${name}'s profile`} />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-email">{email}</p>
    </div>
  );
};

export default ProfileCard;
