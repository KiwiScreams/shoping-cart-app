import Home from "./home/Home";
import Cart from "./cart/Cart";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <>
      <CartProvider>
          <Home />
          <Cart />
      </CartProvider>
    </>
  );
}

export default App;
