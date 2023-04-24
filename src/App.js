import "./App.css";
import Header from "./components/Header/Header";
import Shoes from "./components/Items/Shoes/Shoes";
import Login from "./components/Login/Login";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsShown, setCartISShown] = useState(false);
  const hideCartHandler = () => {
    setCartISShown(false);
  };
  const showCartHandler = () => {
    setCartISShown(true);
  };

  const [loginIsShown, setLoginIsShown] = useState(false);
  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };
  const showLoginHandler = () => {
    setLoginIsShown(true);
  };

  const [wishlistIsShown, setWishlistIsShown] = useState(false);
  const hideWishlistHandler = () => {
    setWishlistIsShown(false);
  };
  const showWishlistHandler = () => {
    setWishlistIsShown(true);
  };

  return (
    <CartProvider>
      {loginIsShown && <Login onClose={hideLoginHandler} />}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {wishlistIsShown && <Wishlist onClose={hideWishlistHandler}></Wishlist>}
      <Header
        onShowLogin={showLoginHandler}
        onShowCart={showCartHandler}
        onShowWishlist={showWishlistHandler}
      ></Header>
      <Shoes />
    </CartProvider>
  );
}

export default App;
