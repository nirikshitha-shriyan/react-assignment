import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  wishlistItems: [],
  wishlistTotalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("Cart Provider - added");
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //const updatedItems = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
      wishlistItems: state.wishlistItems,
      wishlistTotalAmount: state.wishlistTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    console.log("Cart Provider - removed");
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    console.log("existingCartItemIndex" + existingCartItemIndex);
    const existingItem = state.items[existingCartItemIndex];
    const updatedItems = state.items.filter((item) => item.id !== action.id);
    const updatedAmount =
      state.totalAmount - existingItem.price * existingItem.amount;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
      wishlistItems: state.wishlistItems,
      wishlistTotalAmount: state.wishlistTotalAmount,
    };
  }

  if (action.type === "ORDER") {
    return defaultCartState;
  }

  if (action.type === "ADDTOWISHLIST") {
    console.log("added to wishlist");
    const existingWishlistItemIndex = state.wishlistItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingwishlistItem = state.wishlistItems[existingWishlistItemIndex];
    if (!existingwishlistItem) {
      const updatedItems = state.wishlistItems.concat(action.item);
      const updatedAmount = state.wishlistTotalAmount + action.item.price;
      return {
        items: state.items,
        totalAmount: state.totalAmount,
        wishlistItems: updatedItems,
        wishlistTotalAmount: updatedAmount,
      };
    } else {
      return {
        items: state.items,
        totalAmount: state.totalAmount,
        wishlistItems: state.wishlistItems,
        wishlistTotalAmount: state.wishlistTotalAmount,
      };
    }
  }

  if (action.type === "MOVETOCART") {
    console.log("moved to cart");

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedCartItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedCartItems = state.items.concat(action.item);
    }
    const updatedCartAmount = state.totalAmount + action.item.price;

    const existingWishlistItemIndex = state.wishlistItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingWishListItem = state.wishlistItems[existingWishlistItemIndex];
    const updatedWishlistItems = state.wishlistItems.filter(
      (item) => item.id !== action.item.id
    );
    const updatedWishlistAmount =
      state.wishlistTotalAmount - existingWishListItem.price;

    return {
      items: updatedCartItems,
      totalAmount: updatedCartAmount,
      wishlistItems: updatedWishlistItems,
      wishlistTotalAmount: updatedWishlistAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const placeOrderHandler = () => {
    dispatchCartAction({ type: "ORDER" });
  };

  const addItemToWishlistHandler = (item) => {
    dispatchCartAction({ type: "ADDTOWISHLIST", item: item });
  };

  const moveItemToCartHandler = (item) => {
    dispatchCartAction({ type: "MOVETOCART", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    wishlistItems: cartState.wishlistItems,
    wishlistTotalAmount: cartState.wishlistTotalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    placeOrder: placeOrderHandler,
    addItemToWishlist: addItemToWishlistHandler,
    moveItemToCart: moveItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
