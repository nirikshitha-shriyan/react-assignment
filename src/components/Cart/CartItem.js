import { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../store/cart-context";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const removeFromCartHandler = () => {
    console.log("CartItem: onlick -remove item from cart");
    cartCtx.removeItem(props.id);
  };

  return (
    <li className={classes["item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFromCartHandler}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
