import React from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";
import BtnAddDel from "../../components/BtnAddDel";
import DetailTitle from "./components/DetailTitle";
import DetailCatagory from "./components/DetailCatagory";
import DetailRating from "./components/DetailRating";
import DetailPrice from "./components/DetailPrice";
import DetailDescription from "./components/DetailDescription";
import DetailImage from "./components/DetailImage";

export default function ItemDetails({ item, openModal, closeModal }) {
  if (!openModal) return null;

  return createPortal(
    <Modal closeModal={closeModal}>
      <div className="flex p-1">
        <DetailImage image={item.image} />
        <div className="flex flex-col flex-1">
          <div className="p-4">
            <DetailTitle item={item} />
            <DetailCatagory catagory={item.category} />
          </div>
          <div className="flex py-4 border-t-2 pr-4 pl-2">
            <DetailPrice price={item.price} />
            <DetailRating rating={item.rating} />
          </div>
          <DetailDescription description={item.description} />
        </div>
        <BtnAddDel item={item} />
      </div>
    </Modal>,
    document.body
  );
}
