import React from "react";
import Item from "./Item";

export default function Container({ data }) {
  return (
    <ul className="flex flex-wrap  justify-evenly">
      {data.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
