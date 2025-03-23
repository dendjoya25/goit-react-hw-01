import React from "react";
import { TransactionHistoryItem } from "./TransactionHistoryItem";
import s from "./TransactionHistory.module.css";
export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.wrapper}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
            isEven={index % 2 === 1}
          />
        ))}
      </tbody>
    </table>
  );
};
