import React from "react";

export default function DetailRating({ rating: { rate, count } }) {
  return (
    <>
      <div className="text-2xl">
        ⭐<span className="text-2xl px-1">{rate}</span>({count})
      </div>
    </>
  );
}
