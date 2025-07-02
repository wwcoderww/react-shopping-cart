import React from "react";
import NavBar from "../../components/NavBar";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../hooks/CartContext";

export default function Layout() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    </div>
  );
}
