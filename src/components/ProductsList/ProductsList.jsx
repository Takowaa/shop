import {useEffect, useState} from "react";
import styles from './ProductsList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../store/products/actions.js";
import ProductCard from "../ProductCard/index.js";
import Loader from "../Loader/Loader.jsx";
const ProductsList = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState("")

  const {products, isLoadingProducts} = useSelector((store) => store.products)


  const handleChange = (e) =>{
        setSearchTerm(e.target.value)
  }
  const filteredProducts =  products.filter((product)=>( product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  if (isLoadingProducts){
    return <Loader />
  }

  return (
   <div>

     <div className={styles.row} >

       {
      filteredProducts.map((product)=>(
           <ProductCard
             key={product.id}
             product={product}
           />
         ))
       }
     </div>
   </div>
  );
};

export default ProductsList;