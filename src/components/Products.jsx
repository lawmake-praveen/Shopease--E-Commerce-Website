import React, { useEffect, useState } from "react";
// import { Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  fetchAllProducts,
  addToCart,
} from "../features/ProductSlice";
import {
  AiOutlineArrowUp,
} from "react-icons/ai";
import { Product } from "./export";

const Products = () => {
  const [showAddedMsg, setShowAddedMsg] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const dispatch = useDispatch();
  const allProducts = useSelector(getAllProducts);
  const searchInput = useSelector((state) => state.product.searchInput);

  console.log(allProducts)
  useEffect(() => {
    dispatch(fetchAllProducts());

    const handleScroll = () => {
      window.scrollY > 300 ? setShowBackToTop(true) : setShowBackToTop(false)
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addProductToCart = (item) => {
    dispatch(addToCart(item));
    setShowAddedMsg(item.id);
    setTimeout(() => {
      setShowAddedMsg(null);
    }, 500);
  };

  return (
    <div className="products-container">
      <a href="#top" className={`arrow-top ${showBackToTop && "display"}`}>
        <AiOutlineArrowUp />
      </a>
      {allProducts && allProducts.length > 0 ? (
        allProducts.map((item, index) => {
          const isRecentlyAdded = showAddedMsg === item.id;
          return (
            <Product
              key={index}
              item={item}
              isRecentlyAdded={isRecentlyAdded}
              addProductToCart={addProductToCart}
            />
          );
        })
      ) : (
        <div className="no-items">
          No results for "{searchInput}" <br /> <span>Try something else!</span>
        </div>
      )}
    </div>
  );
};

export default Products;
