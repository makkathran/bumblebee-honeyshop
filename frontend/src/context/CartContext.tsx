import { createContext, useContext, useState, ReactNode } from "react";

export type HoneyType = "akác" | "gyógy" | "hárs" | "virág" | "repce";

export type CartItem = {
  type: HoneyType;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (type: HoneyType) => void;
  removeFromCart: (type: HoneyType) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (type: HoneyType) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.type === type);
      if (existing) {
        return prev.map((item) =>
          item.type === type ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { type, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (type: HoneyType) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.type === type ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
