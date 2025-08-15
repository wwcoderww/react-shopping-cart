import { useState } from "react";
import ItemDetails from "../itemDetails/ItemDetails";
import ItemImage from "./components/item/ItemImage";
import ItemInput from "./components/item/ItemInput";
import ItemStats from "./components/item/ItemStats";
import ItemTitle from "./components/item/ItemTitle";
import type { ProductItemType } from "../../types/ProductItemType";

type ItemType = {
  item: ProductItemType;
};

export default function Item({ item }: ItemType) {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);

  return (
    <>
      <li
        onClick={showModal}
        key={item.id}
        className="w-80 border-5 rounded-sm text-blue-100 hover:border-blue-600 hover:cursor-pointer"
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
