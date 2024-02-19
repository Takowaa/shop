
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../ProductCard/index.js";
import {useEffect} from "react";
import {getSingleProduct} from "../../store/products/actions.js";
import Loader from "../Loader/Loader.jsx";
import {clearOfNull} from "../../store/products/slice.js";


const SingleProduct = () => {
  const { id } = useParams();
  const {productDetails} = useSelector((store) => store.products);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getSingleProduct(id))
    return () =>{
      dispatch(clearOfNull())
    }
  }, [dispatch, id]);

  if (!productDetails){
    return <Loader />
  }

  return (
     <ProductCard product={productDetails} />
  );
};

export default SingleProduct;
