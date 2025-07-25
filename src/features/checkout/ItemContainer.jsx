import React from "react";
import { useCart } from "../../hooks/CartContext";
import ItemList from "./ItemList";
import Summary from "./Summary";

export default function ItemContainer() {
  const { cart, updateCart } = useCart();
  const emptyCart = cart.length === 0;

  return (
    <>
      {emptyCart ? (
        <div className="w-full h-full justify-center flex items-center text-4xl">
          Add Items To Cart!
        </div>
      ) : (
        <div className="py-16 max-w-8/12 mx-auto">
          <ItemList cart={cart} updateCart={updateCart} />
          <Summary cart={cart} />
          <form action=""></form>
        </div>
      )}
    </>
  );
}
