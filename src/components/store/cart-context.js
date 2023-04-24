import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  wishlistItems: [],
  wishlistTotalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  placeOrder: () => {},
  addItemToWishlist: (item) => {},
  moveItemToCart: (item) => {},
});

export default CartContext;
