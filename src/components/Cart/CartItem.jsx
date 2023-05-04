import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `${props.price.toLocaleString()}원`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.cart}>
        <div>
          <img className={classes.img} src={props.image} alt="/" />
          <h3>{props.name}</h3>
        </div>

        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
