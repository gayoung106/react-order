import React from "react";
import classes from "./ClothItem.module.css";
import ClothItemFrom from "./ClothItemFrom";

const ClothItem = (props) => {
  const price = `${props.price}원`;
  return (
    <li className={classes.cloth}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ClothItemFrom />
      </div>
    </li>
  );
};

export default ClothItem;
