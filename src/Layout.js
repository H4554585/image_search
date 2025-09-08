import { Outlet, Link } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>圖片搜索網站</h1>
          </li>
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/about">關於</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
