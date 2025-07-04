import React from "react";

export default function ItemImage({ image }) {
  return (
    <img
      src={image}
      alt="Missing Image"
      className="block object-fit w-80 h-80"
    />
  );
}
