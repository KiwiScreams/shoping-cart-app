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
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>your cart is empty</h1>;
  return (
    <>
      <div>
        <h1>CaRT</h1>
        <h5>
          {totalUniqueItems} total items {totalItems}
          {items.map((item, index) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>
                <h1>{item.quantity}</h1>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItem(item.id)}>remove</button>
              </div>
            );
          })}
        </h5>
        <h1>CART</h1>
      </div>
    </>
  );
};

export default Cart;
