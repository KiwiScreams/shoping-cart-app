import Product from "../product/Product";
import "./Home.css";
import data from "../data";
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
            price={prod.price}
          />
        );
      })}
    </>
  );
};

export default Home;
