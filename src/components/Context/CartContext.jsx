import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  clearCart: () => {},
  isInCart: () => {},
  removeProduct: () => {},
  addProduct: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {},
});

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.find((product) => product.id === id) ? true : false;
  };

  const removeProduct = (id) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(newCartItems);
  };

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartItems(
        cartItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity }]);
    }
  };

  const getTotalQuantity = () => {
    let cant = 0;
    cartItems.forEach((e) => (cant += e.quantity));
    return cant;
  };

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((e) => (total += e.quantity * e.price));
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeProduct,
        clearCart,
        isInCart,
        getTotal,
        getTotalQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
