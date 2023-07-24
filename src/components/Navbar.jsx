import React, { useState } from "react";
import icon from "../assets/shopify-logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../features/ProductSlice";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(true);
  const dispatch = useDispatch();
  const allCartProducts = useSelector((state) => state.product.cart);

  let count = 0;

  for (let i = 0; i < allCartProducts.length; i++) {
    const element = allCartProducts[i];
    count += element.quantity;
  }

  const showSidebar = () => {
    setShowMenu((initial) => !initial);
    setShowMenuBtn((initial) => !initial);
  };
  const menuClicked = () => {
    dispatch(fetchAllProducts());
    setShowMenu(false);
    setShowMenuBtn(true);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        <img src={icon} className="logo" />
      </Link>
      <ul className={showMenu ? "menu-bar active" : "menu-bar"}>
        <NavLink
          to="/"
          className="item"
          activeclassname="active-link"
          onClick={menuClicked}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeclassname="active-link"
          className="item"
          onClick={() => {
            setShowMenu(false);
            setShowMenuBtn(true);
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          activeclassname="active-link"
          className="item"
          onClick={() => {
            setShowMenu(false);
            setShowMenuBtn(true);
          }}
        >
          Contact
        </NavLink>
      </ul>
      <div className="cart-menu">
        <Link
          to="/cart"
          className="cart-icon"
          onClick={() => {
            setShowMenu(false);
            setShowMenuBtn(true);
          }}
        >
          <AiOutlineShoppingCart />
          <span>{count}</span>
        </Link>

        <div className="menu-icon">
          {showMenuBtn ? (
            <AiOutlineMenu onClick={showSidebar} />
          ) : (
            <AiOutlineClose onClick={showSidebar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
