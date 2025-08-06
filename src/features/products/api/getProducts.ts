export default async function getProducts() {
  return await fetch("https://fakestoreapi.com/products").then((res) => {
    if (!res.ok)
      // If failed to fetch data
      throw new Error("Unable to load products at this time. Try again later");
    // Else return data
    return res.json();
  });
}
