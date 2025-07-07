import React from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";
import BtnAddDel from "../../components/BtnAddDel";

export default function ItemDetails({ item, openModal, closeModal }) {
  if (!openModal) return null;

  return createPortal(
    <Modal closeModal={closeModal}>
      <div className="flex">
        <img src={item.image} className="w-100" />
        <div className="max-w-140 flex flex-col flex-1">
          <div className="text-center text-5xl p-1">{item.title}</div>
          <div>{item.category}</div>
          <div className="flex">
            <div className="text-2xl flex-1">${item.price}</div>
            <div>{item.rating.rate}</div>
            <div>({item.rating.count})</div>
          </div>
          <div className="indent-2 p-1 my-auto capitalize">
            {item.description}
          </div>
        </div>
        <BtnAddDel item={item} />
      </div>
    </Modal>,
    document.body
  );
}
