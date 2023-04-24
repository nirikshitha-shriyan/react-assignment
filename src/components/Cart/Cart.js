import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const [isCheckout, setIsCheckout] = useState(false);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        ></CartItem>
      ))}
    </ul>
  );

  const orderHandler = () => {
    console.log("order placed");
    //cartCtx.placeOrder();
    setIsCheckout(true);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkoutHandler = (userData) => {
    setIsCheckout(false);
    setIsSubmitting(false);
    setDidSubmit(true);
    if (localStorage.getItem("loggedIn")) {
      setIsLoggedIn(true);
    } else {
      return;
    }
    cartCtx.placeOrder();
  };

  // return (
  //   <Modal onClose={props.onClose}>
  //     <h1>Cart</h1>
  //     {cartItems}
  //     <div className={classes.total}>
  //       <span>Total Amount</span>
  //       <span>{totalAmount}</span>
  //     </div>

  //     {isCheckout && (
  //       <Checkout onConfirm={checkoutHandler} onCancel={props.onClose} />
  //     )}

  //     {!isCheckout && (
  //       <div className={classes.actions}>
  //         <button className={classes["button--alt"]} onClick={props.onClose}>
  //           Close
  //         </button>
  //         {hasItems && (
  //           <button className={classes.button} onClick={orderHadler}>
  //             Order
  //           </button>
  //         )}
  //       </div>
  //     )}
  //   </Modal>
  // );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={checkoutHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const isLoginModalContent = <p>Please Login...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully placed the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && !isLoggedIn && isLoginModalContent}
      {!isSubmitting && didSubmit && isLoggedIn && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
