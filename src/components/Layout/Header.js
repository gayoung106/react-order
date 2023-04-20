import { Fragment } from "react";
import MarkMmain from "../../assets/Markm.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>MarkM</h1>
        <button>장바구니</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={MarkMmain} alt="MarkM model is Mimi" />
      </div>
    </Fragment>
  );
};

export default Header;
