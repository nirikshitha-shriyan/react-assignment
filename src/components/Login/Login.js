import { useRef } from "react";
import { useState } from "react";
import classes from "./Login.module.css";
import Modal from "../UI/Modal";

const Login = (props) => {
  //const emailInputRef = useRef(); // for submission
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  //const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim() === "") {
      // setEnteredEmailIsValid(true);
      return;
    }
    
    // const enteredEmailValue = emailInputRef.current.value;
    // setEnteredEmail("");

    if(localStorage.getItem('loggedIn')){
      console.log('already logged-in');
      return;
    }

    if(enteredEmail === 'test@email.com' && enteredPassword === 'test'){
      console.log('looged-in');
      localStorage.setItem('loggedIn',true);
      props.onClose();
    } else {
      console.log(enteredEmail);
      console.log(enteredPassword);
    }
  };

  const portalElement = document.getElementById("overlays");

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            //ref={emailInputRef}
            type="text"
            id="email"
            onChange={emailInputChangeHandler}
            value={enteredEmail}
          />
          <label>Password</label>
          <input type="password"  onChange={passwordInputChangeHandler}/>
          <div className={classes.div}>
          <button className={classes.loginbutton}>Login</button>
          </div>
          
        </div>
      </form>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Login;
