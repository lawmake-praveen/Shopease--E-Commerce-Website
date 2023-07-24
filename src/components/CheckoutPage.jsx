import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CheckoutPage = ({ allCartProducts, setCheckoutPage, worth, setOrderPlaced }) => {

  const orderCompleted = () => {
    setCheckoutPage(false);
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  return (
    <div className="checkout-page-outer">

      <div className="checkout-page">
        <span className="close-btn" onClick={() => setCheckoutPage(false)}>
          <AiOutlineClose />
        </span>
        <h1>Checkout Page</h1>
        <div className="show-cart-products">
          {allCartProducts.length &&
            allCartProducts.map((item, index) => {
              return (
                <div className="product-for-checking" key={index}>
                  <div className="img-container">
                    <img src={item.thumbnail} />
                  </div>
                  <p>{item.title}</p>
                  <p>
                    ${item.price} X {item.quantity} = $
                    {item.quantity * item.price}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <p>Total Products: {allCartProducts.length}</p>
          <p>Total Cost: ${worth}</p>
          <button className="buy-now" onClick={orderCompleted}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
