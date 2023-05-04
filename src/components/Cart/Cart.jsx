import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCTX = useContext(CartContext);

  const totalAmount = `${cartCTX.totalAmount.toLocaleString()}원`;
  const hasItems = cartCTX.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCTX.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://gazero-cart-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCTX.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCTX.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          image={item.image}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        닫기
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          주문하기
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>결제금액</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = (
    <p className={classes.order}>주문서를 전송하는 중입니다.</p>
  );

  const didSubmittingModalContent = (
    <React.Fragment>
      <p className={classes.order}>주문이 성공적으로 완료되었습니다 !</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          닫기
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
