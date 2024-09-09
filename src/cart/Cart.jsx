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
        <h5>
          {totalUniqueItems} total items {totalItems}
          {items.map((item, index) => 
        {
            <div key={index}>
                <img src={item.image} alt="" />
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>
            </div>
        })}
        </h5>
      </div>
    </>
  );
};

export default Cart;
