import React from "react";
import Item from "./Item";

export default function ProductList({ data, search }) {
  const searchResults = data.filter((item) => {
    const newItem = item.title.toLowerCase();
    const newSearch = search.toLowerCase();
    return newItem.includes(newSearch);
  });
  console.log(searchResults);
  const activeShowing = search ? searchResults : data;

  return (
    <ul className="flex flex-wrap justify-center gap-5 py-6">
      {activeShowing.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}
