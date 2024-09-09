import "./Product.css";
const Product = (props) => {
  return (
    <>
      <section>
        <h1>product</h1>
        <div>
          <h2>{props.name}</h2>
          <h3>{props.price}</h3>
          <img src={props.image} alt="" />
          <p>{props.desc}</p>
        </div>
      </section>
    </>
  );
};

export default Product;
