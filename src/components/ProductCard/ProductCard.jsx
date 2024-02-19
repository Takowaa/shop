import styles from './ProductCard.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, addToFavorites} from "../../store/products/slice.js";
import Rating from "../Rating/Rating.jsx";
import {Link} from "react-router-dom";


const ProductCard = ({product}) => {
  const dispatch = useDispatch()
  const {favorites} = useSelector((store)=> store.products)
  const isFavorite = favorites.find((favorite) => favorite.id === product.id)
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product));

  };
  return (
    <div className={styles.column}>
      <div className={styles.productCard}>
        <Link to={`/product/${product.id}`} className={styles.productLink}>

          <div className={styles.rate}>
            <img src={product.image} alt="" />

          </div>
          <p className={styles.text}>{product.title}</p>
          <Rating rating={product.rating} />
          <p>{`${product.price}$`}</p>

        </Link>
        <div>
          <button
            onClick={handleAddToFavorites}
            className={`${styles.favoritesBtn} ${ isFavorite ? styles.favorite : ''}`}
          >
            <i className={`bx ${ isFavorite ? 'bxs-heart' : 'bx-heart'}`}></i>
          </button>
        </div>
        <button onClick={() => dispatch(addToCart(product))} className={styles.cardBtn}>
          Add to cart
        </button>
      </div>

    </div>

  );
};

export default ProductCard;
