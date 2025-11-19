import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem((prev) => {
      const itemInCart = prev.find((item) => item.id === product.id);
      if (itemInCart) {
        // If item already in cart, just update quantity
       
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
        
      } else {
        // If item is new, use given quantity or default 1
         toast.success("Product is added to cart!");
        return [...prev, { ...product, quantity: product.quantity || 1 }];
       
      }
    });
  };

  const updateQunatity = (productId, action) => {
    setCartItem((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity ?? 1;
            if (action === "increase") newUnit += 1;
            if (action === "decrease") newUnit -= 1;
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item != null)
    );
  };

  const removeFromCart = (productId) => {
    setCartItem((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCartItem([]);

  const deltedItemHandler = (productId) => {
    toast.success("Product Removed From Cart !");
    setCartItem(cartItem.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        deltedItemHandler,
        setCartItem,
        addToCart,
        updateQunatity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
