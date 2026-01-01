import { ICartResponse } from "@/Interfaces/cart.interface";
import { getUserCart } from "@/services/cart.api";
import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

interface ICartContext {
  cartDetails: ICartResponse | null;
}

const CartContext = createContext<ICartContext | null>(null);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartDetails, setCartDetails] = useState<ICartResponse | null>(null);

  useEffect(() => {
    async function getCartDetails() {
      const data = await getUserCart();
      setCartDetails(data);
    }

    getCartDetails();
  }, []);

  return (
    <CartContext.Provider value={{ cartDetails }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
}
