import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (event) => {
    event.prventDefault();
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">주소</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street-detail">상세주소</label>
        <input type="text" id="street-detail" />
      </div>
      <button type="button" onClick={props.onCancel}>
        취소
      </button>
      <button>확인</button>
    </form>
  );
};

export default Checkout;
