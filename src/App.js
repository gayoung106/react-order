import { useState } from "react";

import Header from "./components/Layout/Header";
import Clothes from "./components/Clothes/Clothes";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hedeCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hedeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Clothes />
      </main>
    </CartProvider>
  );
}

export default App;
