import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { element: <Welcome />, path: "/home" },
      { element: <Products />, path: "/products" },
      { element: <Checkout />, path: "/checkout" },
      { element: <Login />, path: "/login" },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}
