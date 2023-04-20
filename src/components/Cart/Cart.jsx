import { useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        [{ id: "c1", name: "SWEATSHIRT_NAVY", amount: 2, price: "80,100" }].map(
          (item) => <li>{item.name}</li>
        ),
      ]}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>결제금액</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          닫기
        </button>
        <button className={classes.button}>주문하기</button>
      </div>
    </Modal>
  );
};

export default Cart;
