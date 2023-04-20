import React from "react";
import classes from "./ClothItemFrom.module.css";
import Input from "../../UI/Input";

const ClothItemFrom = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="수량"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ 추가</button>
    </form>
  );
};

export default ClothItemFrom;
