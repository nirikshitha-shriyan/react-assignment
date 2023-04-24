import { useContext } from "react";
import classes from "./DisplayShoeItem.module.css";
import CartContext from "../../store/cart-context";

const DisplayShoeItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = () => {
    console.log("ShoeItem: onlick -add to cart item");
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      key: props.id,
    });
  };

  const addToWishlistHandler = () => {
    console.log("ShoeItem: onlick -add to wishlist item");
    cartCtx.addItemToWishlist({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      key: props.id,
    });
  };

  return (
    // <li className={classes.shoe}>
     <li className={classes.div}>
      {/* <div className={classes.div}> */}
        <div >
          <img src={props.img} width="100px" height="100px" alt="not visible" />
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div  >
          <button className={classes.button} onClick={addToCartHandler}>Add To Cart</button>
          {/* <div className={classes.price}></div> */}
          <button className={classes.button} onClick={addToWishlistHandler}>Add To Wishlist</button>
        </div>
      {/* </div> */}
    </li>
  );
};

export default DisplayShoeItem;
