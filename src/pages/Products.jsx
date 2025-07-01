import { useQuery } from "@tanstack/react-query";
import React from "react";

async function fetchData() {
  try {
    const data = await fetch("https://fakestoreapi.com/products").then(
      (res) => {
        if (!res.ok) throw new Error("Error Loading from API");
        return res.json();
      }
    );
    return data;
  } catch (error) {
    return error;
  }
}

export default function Products() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["allItems"],
    queryFn: fetchData,
  });
  console.log(data);
  return <div>Products</div>;
}
