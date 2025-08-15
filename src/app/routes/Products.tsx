import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/LoadingSpinner";
import { SearchProvider } from "../../contexts/SearchContext";
import ProductList from "../../features/products/ProductList";
import Search from "../../features/products/Search";
import getProducts from "../../features/products/api/getProducts";
// Wrap code in context for prop drilling and access item catagories in 'SearchFilter'
// // Can delete useEffect by adding a state inside context for displaying items
export default function Products() {
  // Store Data inside queryKey: allItems
  const { isLoading, data, error } = useQuery({
    queryKey: ["allItems"],
    queryFn: getProducts,
  });

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <div>ERROR: {error.message}</div>}
      {!isLoading && !error && data && (
        <SearchProvider>
          <div className="flex flex-col text-2xl w-full h-full">
            <Search />
            <ProductList />
          </div>
        </SearchProvider>
      )}
    </>
  );
}
