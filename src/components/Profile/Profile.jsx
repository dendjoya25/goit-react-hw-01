import React from "react";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, stats, image }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img className={s.profileImg} src={image} alt="User avatar" />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.profileStats}>
        <li className={s.profileStatsItem}>
          <span>Followers </span>
          <span>{stats.followers}</span>
        </li>
        <li className={s.profileStatsItem}>
          <span>Views </span>
          <span>{stats.views}</span>
        </li>
        <li className={s.profileStatsItem}>
          <span>Likes </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
