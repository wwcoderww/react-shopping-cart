import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import Layout from "./routes/Layout";
import { router, queryClient } from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

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
