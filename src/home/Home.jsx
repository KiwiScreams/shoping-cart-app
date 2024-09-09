import Product from "../product/Product";
import "./Home.css";
import data from "../data";
const Home = () => {
  return (
    <>
      <section className="home-section">
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
      </section>
    </>
  );
};

export default Home;
