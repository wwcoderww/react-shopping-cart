import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ProductItemType } from "../types/ProductItemType";

interface CartContextType {
  cart: ProductItemType[];
  setCart: React.Dispatch<React.SetStateAction<ProductItemType[]>>;
  updateCart: (item: ProductItemType, quantity: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<ProductItemType[]>(
    JSON.parse(localStorage.getItem("cart") || "")
  );

  function updateCart(item: ProductItemType, quantity: number) {
    // 1. Check if item is already in cart
    const itemExist: ProductItemType | undefined = cart.find(
      (cartItem: ProductItemType) => cartItem.title === item.title
    );
    // 2. Check if invalid quantity
    if (!itemExist?.quantity && quantity < 1) return;
    // 3. Check if item needs to be deleted (Quanity < 1)
    const toDelete: boolean = itemExist?.quantity
      ? itemExist.quantity + quantity < 1
      : quantity < 1;
    if (toDelete) {
      item.quantity = 0;
      return setCart((cur) =>
        cur.filter((cartItem) => cartItem.title !== item.title)
      );
    }
    // 4a1. If item is in cart this is the new cart
    const newCart = cart.map((cartItem) => {
      if (item === cartItem && cartItem.quantity) {
        cartItem.quantity += quantity;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    // 4a2. If It was in cart
    if (itemExist) {
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      // 4b.If item was not in cart
      item.quantity = quantity;
      const newCart = [...cart, item];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === null) throw new Error("Context used outside provider");
  return context;
}

export { CartProvider, useCart };
