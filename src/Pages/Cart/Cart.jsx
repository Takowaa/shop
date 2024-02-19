import {useSelector,useDispatch} from "react-redux";
import styles from './Cart.module.css'
import {addToCart, removeFromCard} from "../../store/products/slice.js";
import Rating from "../../components/Rating/Rating.jsx";
import notFoundImg from "../../assets/notFound.jpeg";
const Cart = () => {
  const {cart} = useSelector((store)=> store.products)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc,rec) =>{
    return acc + rec.price * rec.quantity
  },0).toFixed(2)

  return (
    <div className={styles.container}>

      {
       cart.length ?
        <>
        {
          cart.map((cartItem)=>(
            <div className={styles.row } key={cartItem.id}>
              <img src={cartItem.image} alt=""/>
              <div className={styles.col}>
               <div className={styles.cart}>

                 <p className={styles.text}>{cartItem.title}</p>
                 <Rating rating={cartItem.rating}  />
                 <p>{`${(cartItem.price * cartItem.quantity).toFixed(2)}$`}</p>
                <div className={styles.btnTop}>
                  <button className={styles.btnPlus} onClick={() => dispatch(removeFromCard(cartItem))}>-</button>
                  <span>{cartItem.quantity}</span>
                  <button className={styles.btnMinus} onClick={()=> dispatch(addToCart(cartItem))}>+</button>
                </div>
               </div>
              </div>
            </div>
          ))
        }
         <div className={styles.totatPrice}>
           <p className={styles.price}>Итого {totalPrice}$</p>
         </div>
        </>
        : (<div className={styles.emptyFavorites}>
           <img src={notFoundImg} alt="" />
         </div>)
      }

    </div>

  );
};

export default Cart;