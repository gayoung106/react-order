import React, { useContext } from "react";
import classes from "./ClothItem.module.css";
import ClothItemFrom from "./ClothItemFrom";
import CartContext from "../../../store/cart-context";

const ClothItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `${props.price.toLocaleString()}원`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image,
    });
  };
  return (
    <li className={classes.cloth}>
      <div>
        <img src={props.image} alt="/" />
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ClothItemFrom onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ClothItem;
