import classes from "./Header.module.css";
import React from "react";
import HeaderButton from "./HeaderButton";
import Login from "../Login/Login";

const Header = (props) => {


  const onShowLogin =()=>{
    console.log('clicked');
    return (<div><Login></Login> <h1>h1</h1></div>);
    
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.div}>
          <h1>Assignment</h1>
        </div>
        <div className={classes.div}>
          <HeaderButton item="Login" onClick={props.onShowLogin}/>
          <HeaderButton item="Wishlist" onClick={props.onShowWishlist}/>
          <HeaderButton item="Cart" onClick={props.onShowCart}/>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
