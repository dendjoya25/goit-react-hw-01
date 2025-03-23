import React from "react";
import s from "./FriendListItem.module.css";

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.userInfoContainer}>
      <img className={s.userImg} src={avatar} alt="Avatar" width="48" />
      <p className={s.userName}>{name}</p>
      <p className={s.userStatus} style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
