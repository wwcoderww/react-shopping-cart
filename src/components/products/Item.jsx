import React from "react";

export default function Item({ item: { title, image, price, rating } }) {
  return (
    <li className="w-80">
      <img
        src={image}
        alt="Missing Image"
        className="block object-fit w-80 h-80"
      />
      <div className="text-2xl font-bold line-clamp-2 text-center h-[2lh]">
        {title}
      </div>
      <div>Price: {price}</div>
      <div>Rating: {rating.rate}</div>
      <div>Rating Count: {rating.count}</div>
      <div>
        <button>➕ Hidden until add:</button>
        <button>➖</button>
        <input type="text" />
        <button>➕</button>
      </div>
    </li>
  );
}
