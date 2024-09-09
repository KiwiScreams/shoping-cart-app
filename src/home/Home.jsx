import Product from "../product/Product";
import "./Home.css";
import data from "../data";
import Cart from "../cart/Cart";
const Home = () => {
  return (
    <>
      <h1>home</h1>
      {data.products.map((prod, index) => {
        return (
          <Product
            image={prod.image}
            name={prod.name}
            desc={prod.desc}
            item={prod}
            price={prod.price}
          />
        );
      })}
    </>
  );
};

export default Home;
