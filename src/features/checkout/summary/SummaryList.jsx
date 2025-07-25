import React from "react";
import currency from "../../../utils/currency";
export function SummaryList({ cart }) {
  return (
    <ul>
      {cart?.map((item) => {
        return (
          <li key={item.id} className="flex justify-between py-1">
            <div>{item.title}</div>
            <div>
              {item.price.toFixed(2)} x {item.quantity} ={" "}
              {currency(item.price * item.quantity)}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
