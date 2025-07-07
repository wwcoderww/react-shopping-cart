import React from "react";
import { createPortal } from "react-dom";

export default function ItemDetails({ item, openModal, closeModal }) {
  if (!openModal) return null;

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md shadow-lg bg-white"
      >
        Test
      </div>
    </div>,
    document.body
  );
}
