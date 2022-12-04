import React, { useContext } from "react";
import styles from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../contexts/cart-context";

const HeaderCartBtn = (props) => {
  const cartCTX = useContext(CartContext);
  const numberOfCartItems = cartCTX.items.reduce((current, item) => {
    return current + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
