
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem, Product, Size } from "@/types";

type CartContextType = {
  items: CartItem[];
  addToCart: (flavor: Product, size: Size, toppings: Product[]) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Generate a unique ID for cart items
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Add item to cart
  const addToCart = (flavor: Product, size: Size, toppings: Product[]) => {
    const toppingsPrice = toppings.reduce((sum, topping) => sum + topping.price, 0);
    const itemTotalPrice = size.price + toppingsPrice;
    
    const newItem: CartItem = {
      id: generateId(),
      flavor,
      size,
      toppings,
      quantity: 1,
      totalPrice: itemTotalPrice,
    };
    
    setItems((prevItems) => [...prevItems, newItem]);
    setIsCartOpen(true);
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity, totalPrice: (item.totalPrice / item.quantity) * quantity }
          : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
  };

  // Update totals whenever items change
  useEffect(() => {
    const newTotalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const newSubtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
    const deliveryFee = 5; // Assuming a fixed delivery fee of R$5
    const newTotalPrice = newSubtotal + (newSubtotal > 0 ? deliveryFee : 0);
    
    setTotalItems(newTotalItems);
    setSubtotal(newSubtotal);
    setTotalPrice(newTotalPrice);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
