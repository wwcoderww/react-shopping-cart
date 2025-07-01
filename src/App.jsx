import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </QueryClientProvider>
  );
}
