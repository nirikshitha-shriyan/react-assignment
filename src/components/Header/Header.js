import classes from "./Header.module.css";
import React from "react";
import HeaderButton from "./HeaderButton";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const { wishlistItems } = cartCtx;
  const cartCount = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const wishlistCount = wishlistItems.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.div}>
          <h1>Assignment</h1>
        </div>
        <div className={classes.div}>
          <HeaderButton item="Login" onClick={props.onShowLogin} />
          <HeaderButton
            item="Wishlist"
            count={wishlistCount}
            onClick={props.onShowWishlist}
          />
          <HeaderButton
            item="Cart"
            count={cartCount}
            onClick={props.onShowCart}
          />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
