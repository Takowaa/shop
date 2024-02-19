import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout";
import Homepage from "../Pages/Homepage";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";
import SingleProduct from "../components/SingleProduct";

 export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Homepage />,
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: '/product/:id',
        element: <SingleProduct />
      }
    ]
  }
]);