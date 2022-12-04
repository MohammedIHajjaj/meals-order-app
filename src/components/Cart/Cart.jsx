import React, { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import CartItem from "../UI/CartItem";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCTX = useContext(CartContext);

  const amount = `$${cartCTX.amount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  return (
    <Modal onClick={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        {cartCTX.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler}
            onRemove={cartItemRemoveHandler}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Amount</span>
        <span>{amount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Cancel
        </button>
        {hasItems && <button className={styles.button}>Buy</button>}
      </div>
    </Modal>
  );
};

export default Cart;
