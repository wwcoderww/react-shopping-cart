import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function updateCart(item, quantity) {
    // 1. Check if item is already in cart
    const itemExist = cart.find((cartItem) => cartItem.title === item.title);
    // 2. Check if invalid quantity
    if (!itemExist?.quantity && quantity < 1) return;
    // 3. Check if item needs to be deleted (Quanity < 1)
    const toDelete = itemExist?.quantity + quantity < 1;
    if (toDelete) {
      item.quantity = null;
      return setCart((cur) =>
        cur.filter((cartItem) => cartItem.title !== item.title)
      );
    }
    // 4a1. If item is in cart this is the new cart
    const newCart = cart.map((cartItem) => {
      if (item === cartItem) {
        cartItem.quantity += quantity;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    // 4a2. If It was in cart
    if (itemExist) {
      setCart(newCart);
    } else {
      // 4b.If item was not in cart
      item.quantity = quantity;
      setCart((cur) => [...cur, item]);
    }
    console.log(cart);
  }

  return (
    <CartContext.Provider value={{ cart, setCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("Context used outside provider");
  return context;
}

export { CartProvider, useCart };
