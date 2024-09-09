import "./Product.css";
import { useCart } from "react-use-cart";
const Product = (props) => {
    const {addItem} = useCart();
  return (
    <>
      <section>
        <h1>product</h1>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.price}</h3>
          <img src={props.image} alt="" />
          <p>{props.desc}</p>
          <button onClick={() => addItem(props.item)}>add</button>
        </div>
      </section>
    </>
  );
};

export default Product;
