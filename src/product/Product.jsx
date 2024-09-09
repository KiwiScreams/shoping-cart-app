import "./Product.css";
const Product = (props) => {
  return (
    <>
      <section>
        <h1>product</h1>
        <div>
          <h2>{props.name}</h2>
          <p>{props.desc}</p>
        </div>
      </section>
    </>
  );
};

export default Product;
