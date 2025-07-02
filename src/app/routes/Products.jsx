import { useQuery } from "@tanstack/react-query";
import React from "react";
import Container from "../../features/products/Container";

async function fetchData() {
  return await fetch("https://fakestoreapi.com/products").then((res) => {
    if (!res.ok)
      // If failed to fetch data
      throw new Error("Unable to load products at this time. Try again later");
    // Else return data
    return res.json();
  });
}
export default function Products() {
  // Store data inside queryKey: allItems
  const { isLoading, data, error } = useQuery({
    queryKey: ["allItems"],
    queryFn: fetchData,
  });
  return (
    <>
      {isLoading && <div>LOADING</div>}
      {error && <div>ERROR: {error.message}</div>}
      {!isLoading && !error && <Container data={data} />}
    </>
  );
}
