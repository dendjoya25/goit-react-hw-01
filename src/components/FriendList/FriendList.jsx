import React from "react";
import FriendListItem from "../FrienListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={s.userInfoList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={s.userInfoListItem} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

export default FriendList;
