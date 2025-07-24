import { useQuery } from "@tanstack/react-query";
import React from "react";
import Container from "../../features/products/Container";
import getProducts from "../../features/products/api/getProducts";

export default function Products() {
  // Store data inside queryKey: allItems
  const { isLoading, data, error } = useQuery({
    queryKey: ["allItems"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoading && <div>LOADING</div>}
      {error && <div>ERROR: {error.message}</div>}
      {!isLoading && !error && <Container data={data} />}
    </>
  );
}
