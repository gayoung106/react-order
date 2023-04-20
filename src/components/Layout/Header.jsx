import { Fragment } from "react";
import MarkMmain from "../../assets/Markm.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MarkM</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MarkMmain} alt="MarkM model is Mimi" />
      </div>
    </Fragment>
  );
};

export default Header;
