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

  return (
    <>
      <div className="cart-section">
        <h1>Your Cart</h1>
        <h5>
          {totalUniqueItems} total items {totalItems}
        </h5>
        {items.map((item, index) => {
          return (
            <div key={item.id} className="cart">
              <div className="image-container">
                <img src={item.image} alt="" />
              </div>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>

              <div className="buttons">
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <h4>{item.quantity}</h4>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div className="total-div">
          <h2 className="total">Total Price: {cartTotal}</h2>
          <button onClick={() => emptyCart()}>Clear</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
