import React from "react";
import currency from "../../../utils/currency";
export function SummaryTotal({ finalTotal }) {
  return (
    <div className="py-2 text-3xl">
      Total: <span className="text-green-400">{currency(finalTotal)}</span>
    </div>
  );
}
