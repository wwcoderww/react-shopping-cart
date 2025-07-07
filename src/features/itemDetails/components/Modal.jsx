import React from "react";

export default function Modal({ children, closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center"
    >
      <div onClick={(e) => e.stopPropagation()} className="shadow-lg bg-white">
        {children}
      </div>
    </div>
  );
}
