import React from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../hooks/CartContext";
import NavBar from "../../features/navbar/NavBar";

export default function Layout() {
  return (
    <div className="bg-blue-600">
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    </div>
  );
}
