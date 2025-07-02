import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./routes/Checkout";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import Products from "./routes/Products";
import Welcome from "./routes/Welcome";

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
