import React, { useRef, useState } from "react";
import classes from "./ClothItemFrom.module.css";
import Input from "../../UI/Input";

const ClothItemFrom = (props) => {
  const [amountIsValid, setAmountIsValue] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValue(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>담기</button>
      {!amountIsValid && (
        <p>수량은 최소 1개 이상 최대 5개 까지 주문 가능합니다.</p>
      )}
    </form>
  );
};

export default ClothItemFrom;
