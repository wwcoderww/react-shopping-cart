import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Checkout from "./routes/Checkout";
import Login from "./routes/Login";
import Products from "./routes/Products";
import Welcome from "./routes/Welcome";

export const router = createBrowserRouter([
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

export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});
