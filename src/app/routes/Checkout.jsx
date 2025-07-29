import { Payment } from "./../../features/checkout/Payment";
import React from "react";
import ItemList from "../../features/checkout/ItemList";
import Summary from "../../features/checkout/Summary";
import { useCart } from "../../contexts/CartContext";

export default function ItemContainer() {
  const { cart, updateCart } = useCart();
  const emptyCart = cart.length === 0;

  return (
    <div className="w-full h-full overflow-scroll">
      {emptyCart ? (
        <div className="w-full h-full justify-center flex items-center text-4xl">
          Add Items To Cart!
        </div>
      ) : (
        <div className="py-16 max-w-8/12 mx-auto">
          <ItemList cart={cart} updateCart={updateCart} />
          <Summary cart={cart} />
          <Payment />
        </div>
      )}
    </div>
  );
}
