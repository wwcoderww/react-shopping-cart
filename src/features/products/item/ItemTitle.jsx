import React from "react";

export default function ItemTitle({ title }) {
  return (
    <div className="text-2xl font-bold line-clamp-2 text-center border-b-3 p-1 min-h-[2.4lh]">
      {title}
    </div>
  );
}
