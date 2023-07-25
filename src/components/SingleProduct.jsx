import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToCart,
  fetchSelectedProduct,
  removeSelectedProduct,
} from "../features/ProductSlice";
import { AiFillStar } from "react-icons/ai";
import shopeaseAssured from "../assets/shopease-assured.png";
import loading from "../assets/loading.png";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.selectedProduct);
  console.log(data);
  useEffect(() => {
    dispatch(fetchSelectedProduct(id));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div className="single-product-detail-page">
      {data.id ? (
        <div className="product-details">
          <div className="details-div">
            <h1 className="title">{data.title}</h1>
            <h4 className="brand">{data.brand}</h4>
            <p className="description">{data.description}</p>
            <div className="ratings">
              <span className="star">
                <AiFillStar />
              </span>
              <span className="rating">{data.rating}</span>
              <img src={shopeaseAssured} alt="" className="assured-msg" />
            </div>
            <div className="stock">
              {data.stock > 40 ? (
                <span className="instock">In Stock</span>
              ) : (
                <span className="hurry">Hurry! Only a few left!</span>
              )}
            </div>
            <div className="price-details">
              <span className="discount-price">${data.price}</span>
              &nbsp;&nbsp;
              <span className="original-price">
                $
                {(
                  data.price +
                  (data.price * data.discountPercentage) / 100
                ).toFixed(0)}
              </span>
              &nbsp;&nbsp;
              <span className="discount-percent">
                {data.discountPercentage.toFixed(0)}%Off
              </span>
            </div>
            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(data))}
            >
              Add To Cart
            </button>
          </div>
          <div className="images-div">
            {data.images.map((image, index) => {
              return (
                <div className="image-div" key={index}>
                  <img src={image} className="img" />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="fetching-product">
          <span>
            <img src={loading} />
          </span>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
