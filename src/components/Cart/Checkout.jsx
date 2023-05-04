import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const isPhoneChars = (value) => value.trim().length === 11;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    phone: true,
    postal: true,
    address: true,
    detail: true,
  });

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const postalInputRef = useRef();
  const addressInputRef = useRef();
  const detailInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDetail = detailInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredPhoneValid = isPhoneChars(enteredPhone);
    const enteredPostalValid = isFiveChars(enteredPostal);
    const enteredAddressValid = !isEmpty(enteredAddress);
    const enteredDetaileValid = !isEmpty(enteredDetail);

    setFormInputsValidity({
      name: enteredNameValid,
      phone: enteredPhoneValid,
      postal: enteredPostalValid,
      address: enteredAddressValid,
      detail: enteredDetaileValid,
    });

    const formIsValid =
      enteredNameValid &&
      enteredPhoneValid &&
      enteredPostalValid &&
      enteredAddressValid &&
      enteredDetaileValid;

    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const phoneControlClasses = `${classes.control} ${
    formInputsValidity.phone ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;

  const detailControlClasses = `${classes.control} ${
    formInputsValidity.detail ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>이름을 입력해주세요.</p>}
      </div>
      <div className={phoneControlClasses}>
        <label htmlFor="phone">휴대폰 번호</label>
        <input type="text" id="phone" ref={phoneInputRef} />
        {!formInputsValidity.phone && <p>올바른 휴대폰 번호를 입력해주세요.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">우편번호</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>올바른 우편번호를 입력해주세요.</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">주소</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>주소를 입력해주세요.</p>}
      </div>
      <div className={detailControlClasses}>
        <label htmlFor="detail">상세주소</label>
        <input type="text" id="detail" ref={detailInputRef} />
        {!formInputsValidity.detail && <p>상세주소를 입력해주세요.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          취소
        </button>
        <button className={classes.submit}>확인</button>
      </div>
    </form>
  );
};

export default Checkout;
