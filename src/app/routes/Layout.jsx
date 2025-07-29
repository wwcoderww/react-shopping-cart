import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../features/navbar/NavBar";
import { CartProvider } from "../../contexts/CartContext";
import { AuthProvider } from "../../contexts/AuthContext";

export default function Layout() {
  return (
    <div className="bg-blue-600 w-screen h-screen flex flex-col">
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <div className="flex-1 overflow-y-scroll bg-blue-500">
            <Outlet />
          </div>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
