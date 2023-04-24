import { useContext } from "react";
import classes from "./WishlisteItem.module.css";
import CartContext from "../store/cart-context";

const WishlistItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const moveToCartHandler = () => {
    console.log("WishlistItem: onlick -move item from Wishlist to cart");
    cartCtx.moveItemToCart({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      key: props.id,
    });
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
        <button onClick={moveToCartHandler}>Move To Cart</button>
      </div>
    </li>
  );
};

export default WishlistItem;
