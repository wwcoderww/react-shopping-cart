import React, { useState } from "react";
import ItemImage from "./item/ItemImage";
import ItemTitle from "./item/ItemTitle";
import ItemStats from "./item/ItemStats";
import ItemInput from "./item/ItemInput";
import ItemDetails from "../itemDetails/ItemDetails";

export default function Item({ item }) {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <li
        onClick={showModal}
        className="w-80 border-5 rounded-sm text-blue-100 hover:border-blue-900 hover:cursor-pointer"
      >
        <ItemImage image={item.image} />
        <ItemTitle title={item.title} />
        <ItemStats price={item.price} rating={item.rating} />
        <ItemInput item={item} />
      </li>
      <ItemDetails openModal={openModal} closeModal={closeModal} item={item} />
    </>
  );
}
