import "./Product.css";
import { useCart } from "react-use-cart";
const Product = (props) => {
  const { addItem } = useCart();
  return (
    <>
      <section className="products-section">
        <div className="image-container">
          <img src={props.image} alt="" />
        </div>
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>
        <button onClick={() => addItem(props.item)}>Add to cart</button>
      </section>
    </>
  );
};

export default Product;
