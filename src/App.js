import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Clothes from "./components/Clothes/Clothes";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Clothes />
      </main>
    </Fragment>
  );
}

export default App;
