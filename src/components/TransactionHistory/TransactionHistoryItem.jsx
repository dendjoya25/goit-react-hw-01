import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistoryItem = ({ type, amount, currency, isEven }) => {
  return (
    <tr className={isEven ? s.evenRow : ""}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
