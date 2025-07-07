import React from "react";

export default function ItemInfo({ item }) {
  return (
    <div className="flex-1 flex flex-col border-l-2 border-r-2">
      <div className="text-center text-2xl line-clamp-1 p-1 flex-1">
        {item.title}
      </div>
      <div className="py-1 px-2">
        <div className="line-clamp-2">{item.description}</div>
      </div>
    </div>
  );
}
