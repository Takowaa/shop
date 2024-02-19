import ProductsList from "../../components/ProductsList/index.js";
import styles from './HomePage.module.css'


const Homepage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}>Our Products</h1>
      <ProductsList  />

    </div>
  );
};

export default Homepage;