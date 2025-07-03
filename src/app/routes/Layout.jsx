import React from "react";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../hooks/CartContext";

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
