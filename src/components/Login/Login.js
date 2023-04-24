import { useState } from "react";
import classes from "./Login.module.css";
import Modal from "../UI/Modal";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredInputIsValid, setEnteredInputIsValid] = useState(false);

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setEnteredInputIsValid(false);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setEnteredInputIsValid(false);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim() === "" || enteredPassword.trim() === "") {
      setEnteredInputIsValid(true);
      return;
    }

    if (localStorage.getItem("loggedIn")) {
      console.log("already logged-in");
      return;
    }

    if (enteredEmail === "test@email.com" && enteredPassword === "test") {
      console.log("looged-in");
      localStorage.setItem("loggedIn", true);
      props.onClose();
    } else {
      console.log(enteredEmail);
      console.log(enteredPassword);
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={emailInputChangeHandler}
            value={enteredEmail}
          />
          <label>Password</label>
          <input type="password" onChange={passwordInputChangeHandler} />
          {enteredInputIsValid && (
            <div>
              <p>Please enter valid credentials</p>
            </div>
          )}
          <div className={classes.div}>
            <button className={classes.loginbutton}>Login</button>
            <button className={classes.loginbutton} onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
