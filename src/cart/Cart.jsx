import "./Cart.css";
import { useCart } from "react-use-cart";
const Cart = () => {
  const { 
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
   } = useCart();
   if(isEmpty) return <h1>your cart is empty</h1>
  return (
  <>

  </>
  );
};

export default Cart;
