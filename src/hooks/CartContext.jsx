import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    // Check if item is already in cart
    const itemExist = cart.find((cartItem) => cartItem.title === item.title);

    const newCart = cart.map((cartItem) => {
      if (item === cartItem) {
        cartItem.quantity += quantity;
        return cartItem;
      }
      return cartItem;
    });
    // If item was not in cart
    if (!itemExist) {
      console.log("1");
      item.quantity = quantity;
      setCart((cur) => [...cur, item]);
    } else {
      setCart(newCart);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
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
