import React, { useEffect, useState } from "react";
// import { Image } from "antd";
import {
  addToCart,
} from "../features/ProductSlice";
import {
  AiFillStar,
  AiFillCheckCircle,
} from "react-icons/ai";

const Product = ({item, addProductToCart, isRecentlyAdded}) => {


  return (
    <div className="product">
      <h3 className="name" style={{ textTransform: "capitalize" }}>
        {item.title}
      </h3>
      <p className="company-name">{item.brand}</p>
      <div className="img-container">
        {item.thumbnail ? (
          <img src={item.thumbnail} className="img" alt="" />
        ) : (
          "Image Loading"
        )}
      </div>
      <div className="price-details">
        <span className="discount-price">${item.price}</span>
        &nbsp;&nbsp;
        <span className="original-price">
          $
          {(item.price + (item.price * item.discountPercentage) / 100).toFixed(
            0
          )}
        </span>
        &nbsp;&nbsp;
        <span className="discount-percent">
          {item.discountPercentage.toFixed(0)}%Off
        </span>
      </div>
      <div className="ratings-instock">
        <p className="ratings">
          <span>
            <AiFillStar />
          </span>
          {item.rating}
        </p>
        <p className="instock">
          {item.stock > 40 ? (
            <span className="stock">In Stock</span>
          ) : (
            <span className="hurry">Only a few left!</span>
          )}
        </p>
      </div>
      <div className="description">{item.description}</div>
      <div className={`added-msg ${isRecentlyAdded && "show-added-msg"}`}>
        <span className="checkmark">
          <AiFillCheckCircle />
        </span>{" "}
        <span className="msg-added">Added to Cart</span>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => addProductToCart(item)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
