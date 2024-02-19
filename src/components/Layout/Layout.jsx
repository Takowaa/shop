import Header from "../Header/index.js";
import {Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

    </>
  );
};

export default Layout;