import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProductList from "../../features/products/ProductList";
import getProducts from "../../features/products/api/getProducts";
import LoadingSpinner from "../../components/LoadingSpinner";
import { SearchBar } from "../../features/products/SearchBar";

export default function Products() {
  const [search, setSearch] = useState("");
  // Store data inside queryKey: allItems
  const { isLoading, data, error } = useQuery({
    queryKey: ["allItems"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <div>ERROR: {error.message}</div>}
      {!isLoading && !error && (
        <div className="flex flex-col text-2xl w-full h-full">
          <SearchBar setSearch={setSearch} />
          <ProductList data={data} search={search} />
        </div>
      )}
    </>
  );
}
