import React from "react";

export default function DetailPrice({ price }) {
  return (
    <div className="text-5xl flex-1 text-green-400 font-semibold">
      ${price.toFixed(2)}
    </div>
  );
}
