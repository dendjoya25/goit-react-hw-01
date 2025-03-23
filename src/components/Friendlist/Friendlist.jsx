import React from "react";
import { FriendListItem } from "./FriendListItem";
import s from "./FriendList.module.css";

export const Friendlist = ({ friends }) => (
  <ul className={s.userInfoList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={s.userInfoListItem} key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
