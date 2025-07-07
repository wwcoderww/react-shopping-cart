import React from "react";

export default function ItemImage({ item }) {
  return <img src={item.image} alt={"Item Image"} className="w-40 h-inherit" />;
}
