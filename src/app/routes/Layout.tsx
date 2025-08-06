import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { CartProvider } from "../../contexts/CartContext";
import NavBar from "../../features/navbar/NavBar";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <AuthProvider>
        <CartProvider>
          <NavBar />
          <div className="flex-1 overflow-y-scroll bg-blue-500 w-full h-full flex">
            <Outlet />
          </div>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}
