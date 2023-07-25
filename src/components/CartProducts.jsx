import React from "react";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { removeFromCart } from "../features/ProductSlice";

const CartProducts = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className="cart-products">
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
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item))}
      >
        Remove From Cart
      </button>
      <div className="quantity">
        {item.quantity < 999 ? item.quantity : "999+"}
      </div>
    </div>
  );
};

export default CartProducts;
