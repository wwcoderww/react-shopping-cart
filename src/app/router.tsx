import { QueryClient } from "@tanstack/react-query";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import Checkout from "./routes/Checkout";
import Account from "./routes/Account";
import Products from "./routes/Products";
import Welcome from "./routes/Welcome";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { element: <Welcome />, path: "/" },
      { element: <Products />, path: "/products" },
      { element: <Checkout />, path: "/checkout" },
      { element: <Account />, path: "/account" },
    ],
  },
]);

export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});
