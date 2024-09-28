import { createContext, useState } from "react";
import { addToCart } from "../services/apiCart";
import { BASE_URL } from "../services/baseUrl";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);
 
  const [isLoading, setIsLoading] = useState(false);
  async function updateProductCount(productId, count) {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/cart/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ count: count }),
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("userToken"),
      },
    });

    if (!res.ok) throw new Error("Failed to update product");

    const data = await res.json();
    setCart(data);
    setIsLoading(false);
    return data;
  }
  return (
    <CartContext.Provider value={{ updateProductCount, isLoading, cart }}>
      {children}
    </CartContext.Provider>
  );
}
