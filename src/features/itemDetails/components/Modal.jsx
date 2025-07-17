import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({ children, closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center flex-col"
    >
      <div className="max-w-140 flex ">
        <IoCloseOutline className="" />
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="shadow-lg bg-white rounded-lg"
      >
        {children}
      </div>
    </div>
  );
}
