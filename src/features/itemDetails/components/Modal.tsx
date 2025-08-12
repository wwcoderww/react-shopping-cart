import React from "react";
import { IoCloseOutline } from "react-icons/io5";

type ModalType = {
  children: React.ReactNode;
  closeModal(): void;
};

export default function Modal({ children, closeModal }: ModalType) {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-sm flex items-center flex-col justify-center"
    >
      <div className="max-w-10/12 max-h-10/12 ">
        <IoCloseOutline className="ml-auto text-5xl hover:cursor-pointer" />
        <div
          onClick={(e) => e.stopPropagation()}
          className="shadow-lg bg-white rounded-lg w-full h-11/12"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
