import React from "react";

export default function DetailRating({ rating: { rate, count } }) {
  return (
    <>
      <div className="text-lg">
        ⭐<span className="text-xl px-1">{rate}</span>({count})
      </div>
    </>
  );
}
