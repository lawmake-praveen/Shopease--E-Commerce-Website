import React from "react";
import { AiFillStar, AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ item, addProductToCart, isRecentlyAdded }) => {
  return (
    <div className="product">
      <Link to={`/product/${item.id}`} className="product-link">
        <h3 className="name" style={{ textTransform: "capitalize" }}>
          {item.title}
        </h3>
        <p className="company-name">{item.brand}</p>
        <div className="img-container">
            <img src={item.thumbnail} className="img" />
        </div>
        <div className="price-details">
          <span className="discount-price">${item.price}</span>
          &nbsp;&nbsp;
          <span className="original-price">
            $
            {(
              item.price +
              (item.price * item.discountPercentage) / 100
            ).toFixed(0)}
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
      </Link>
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
