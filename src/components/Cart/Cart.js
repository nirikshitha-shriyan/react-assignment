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
    setIsCheckout(true);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enteredInputIsValid, setEnteredInputIsValid] = useState(false);

  const checkoutHandler = (userData) => {
    setIsCheckout(false);
    setIsSubmitting(false);

    if (
      userData.name.trim() === "" ||
      userData.city.trim() === "" ||
      userData.street.trim() === "" ||
      userData.pincode.trim() === ""
    ) {
      setEnteredInputIsValid(true);
      console.log("invaliddddddd");
      return;
    }
    setDidSubmit(true);
    if (localStorage.getItem("loggedIn")) {
      setIsLoggedIn(true);
    } else {
      return;
    }

    cartCtx.placeOrder();
  };

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
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
        <div>
          <p>Checkout Details:</p>
          <Checkout onConfirm={checkoutHandler} onCancel={props.onClose} />
        </div>
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const isLoginModalContent = <p>Please Login...</p>;

  const isValidFormContent = (
    <React.Fragment>
      <p>Please fill all the details</p>
    </React.Fragment>
  );

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
      {!isSubmitting &&
        !didSubmit &&
        enteredInputIsValid &&
        !isLoggedIn &&
        isValidFormContent}
      {!isSubmitting &&
        !didSubmit &&
        enteredInputIsValid &&
        isLoggedIn &&
        isValidFormContent}

      {!isSubmitting && didSubmit && !isLoggedIn && isLoginModalContent}
      {!isSubmitting && didSubmit && isLoggedIn && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
