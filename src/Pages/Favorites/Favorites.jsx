
import { useSelector } from "react-redux";
import styles from './Favorites.module.css';
import ProductCard from "../../components/ProductCard/index.js";
import notFoundImg from "../../assets/notFound.jpeg"
const Favorites = () => {
  const { favorites } = useSelector((store) => store.products);

  return (
      <div className={styles.hero}>
        <div className='container'>
        <div className={styles.row}>
          {favorites.length ? (
            favorites.map((favorite) => (
              <ProductCard key={favorite.id} product={favorite} />
            ))
          ) : (
            <div className={styles.emptyFavorites}>
              <img src={notFoundImg} alt="" />
            </div>
          )}
        </div>
        </div>
      </div>
  );
};

export default Favorites;
