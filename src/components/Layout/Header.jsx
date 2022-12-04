import React from "react";
import styles from "./Header.module.css";
import img from "../../assets/img/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Orders App</h1>
        <HeaderCartBtn onShowCart={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default Header;
