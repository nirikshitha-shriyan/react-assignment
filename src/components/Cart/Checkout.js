import { useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCity, setEnteredCity] = useState("");
  const [enteredStreet, setEnteredStreet] = useState("");
  const [enteredPincode, setEnteredPincode] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const streetInputChangeHandler = (event) => {
    setEnteredStreet(event.target.value);
  };

  const cityInputChangeHandler = (event) => {
    setEnteredCity(event.target.value);
  };

  const pincodeInputChangeHandler = (event) => {
    setEnteredPincode(event.target.value);
  };

  const confirmHandler = (event) => {
    console.log("order checked outtttttttttttttttttt");
    //event.preveneDefault();
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      pincode: enteredPincode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" onChange={streetInputChangeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" onChange={cityInputChangeHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" onChange={pincodeInputChangeHandler} />
      </div>

      <div className={classes.actions}>
        <button
          type="button"
          className={classes.button}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={classes.button}
          //onClick={confirmHandler}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
