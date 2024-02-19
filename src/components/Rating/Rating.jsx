import styles from './Rating.module.css'
const Rating = ({rating}) => {
  return (
    <div className={styles.rating}>
        <i  className={rating.rate >= 1 ? ' bx bxs-star' : 'bx bx-star'}></i>
        <i  className={rating.rate >= 2 ? 'bx bxs-star' : 'bx bx-star'}></i>
        <i className={rating.rate >= 3 ? 'bx bxs-star' : 'bx bx-star'}></i>
        <i className={rating.rate >= 4 ? 'bx bxs-star' : 'bx bx-star'}></i>
        <i className={rating.rate >= 5 ? 'bx bxs-star' : 'bx bx-star'}></i>
    </div>
  );
};
export default Rating;

