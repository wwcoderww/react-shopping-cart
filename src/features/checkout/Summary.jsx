import { SummaryTotal } from "./summary/SummaryTotal";
import { PreTotal } from "./../../../PreTotal";
import { SummaryList } from "./summary/SummaryList";
import React from "react";

export default function Summary({ cart }) {
  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const taxTotal = subTotal * 0.0825;
  const finalTotal = subTotal + taxTotal;
  return (
    <div className="flex flex-col text-end text-white p-8 text-2xl mt-6">
      <SummaryList cart={cart} />
      <PreTotal subTotal={subTotal} taxTotal={taxTotal} />
      <SummaryTotal finalTotal={finalTotal} />
    </div>
  );
}
