import React from "react";
import currency from "../../../utils/currency";
export function PreTotal({ subTotal, taxTotal }) {
  return (
    <div className="border-y-2 w-1/2 ml-auto py-1 my-1">
      <div>SubTotal: {currency(subTotal)}</div>
      <div>Tax: {currency(taxTotal)}</div>
    </div>
  );
}
