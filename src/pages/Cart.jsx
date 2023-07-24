import React, { useState } from "react";
import { Navbar, CartProducts, CheckoutPage } from "../components/export";
import { useSelector, useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";
// import { Image } from "antd";
import { removeFromCart, clearCart } from "../features/ProductSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const [checkoutPage, setCheckoutPage] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const showCheckoutPage = () => {
    setCheckoutPage(true);
  };

  const allCartProducts = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  let worth = 0;
  let withoutDiscount = 0;

  for (let i = 0; i < allCartProducts.length; i++) {
    const element = allCartProducts[i];
    worth += element.price * element.quantity;
    let originalPrice =
      (element.price + (element.price * element.discountPercentage) / 100) *
      element.quantity;
    withoutDiscount += originalPrice;
  }

  return (
    <>
      <Navbar />
      {checkoutPage && (
        <CheckoutPage
          allCartProducts={allCartProducts}
          setCheckoutPage={setCheckoutPage}
          worth={worth}
          checkoutPage={checkoutPage}
          setOrderPlaced={setOrderPlaced}
        />
      )}
      {orderPlaced && (
        <div className="order-placed-outer">
          <div className="order-placed">
          <div>
            <BsPatchCheckFill />
          </div>
          <h1>Order Placed</h1>
          </div>
        </div>
      )}
      <div className="cart">
        {worth !== 0 && (
          <>
            <h2 className="total-worth">
              Your Cart Worth: ${worth}{" "}
              <span>${withoutDiscount.toFixed(0)}</span>
            </h2>
            <h4 className="you-save">
              You Save ${withoutDiscount.toFixed(0) - worth}
            </h4>
            <button className="buy-all" onClick={showCheckoutPage}>
              Proceed and Buy
            </button>
          </>
        )}
        <div className="cart-product-container">
          {allCartProducts.length ? (
            allCartProducts.map((item, index) => {
              return <CartProducts key={index} item={item} />;
            })
          ) : (
            <h4 className="cart-empty-msg">
              Your Cart is empty!{" "}
              <Link to="/" className="link-to-home">
                Start Shopping
              </Link>
            </h4>
          )}
        </div>
        {worth !== 0 && (
          <button
            className="clear-all-products"
            onClick={() => dispatch(clearCart())}
          >
            Remove all Items
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
