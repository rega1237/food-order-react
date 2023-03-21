import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Pizzas from "./components/Pizzas/Pizzas";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  const showCartHide = () => {
    setShowCart(false);
  };

  const showCartShow = () => {
    setShowCart(true);
  };

  return (
    <CartProvider>
      <main>
        {showCart && <Cart cartHide={showCartHide} />}
        <Header cartShow={showCartShow} />
        <Pizzas />
      </main>
    </CartProvider>
  );
}

export default App;
