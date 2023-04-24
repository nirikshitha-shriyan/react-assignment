import Modal from "../UI/Modal";
import WishlistItem from "./WishlistItem";
import classes from "./Wishlist.module.css";
import CartContext from "../store/cart-context";
import React, { useContext } from "react";

const Wishlist = (props) => {
  const cartCtx = useContext(CartContext);
  //const hasItems = cartCtx.wishlistItems.length > 0;
  const totalAmount = `$${cartCtx.wishlistTotalAmount.toFixed(2)}`;

  const wishlistItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.wishlistItems.map((item) => (
        <WishlistItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        ></WishlistItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {wishlistItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Wishlist;
