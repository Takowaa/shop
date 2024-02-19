import styles from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

const Header = () => {
  const {favorites,products,cart} = useSelector((store) => store.products)
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setSearchTerm(e.target.value)
  }
  const filteredProducts =  products.filter((product)=>( product.title.toLowerCase().includes(searchTerm.toLowerCase().trim())))

  const openLink = (id) => {
    setSearchTerm("")
    navigate(`/product/${id}`)
  }

  const totalCartItems = cart.reduce((acc,rec) =>{
          return acc + rec.quantity
  },0)
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Logo</h1>
      <div className={styles.position}>
        <input className={styles.inpSearch} value={searchTerm}  onChange={handleChange}  type="text"  placeholder="Search products"/>
        {
          searchTerm.length > 0 &&
          <ul className={styles.result}>
            {filteredProducts.map((product) => (
              <li onClick={ () => openLink(product.id) } key={product.id}>
                {product.title}
                {/*<Link to={`/product/${product.id}`}>{product.title}</Link>*/}
              </li>
            ))}
          </ul>
        }
      </div>
      <nav>
        <Link to="/" className={styles.link}>Homepage</Link>
        <Link to="/favorites" className={styles.link}>Favorites ({favorites.length})</Link>
        <Link to="/cart" className={styles.link}>Cart ({totalCartItems})</Link>
      </nav>
    
    </header>
    
  );
};
export default Header;

