import React from "react";

export default function DetailTitle({ item }) {
  return (
    <div className="text-center text-5xl p-1 font-bold line-clamp-3">
      {item.title}
    </div>
  );
}
