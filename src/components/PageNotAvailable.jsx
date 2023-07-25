import React from "react";
import { Link } from "react-router-dom";

const PageNotAvailable = () => {
  return (
    <div className="page-not-available">
      <div>Hey! You lost while Shopping</div>
      <div>This Page Doesn't Exist!</div>
      <Link to='/' className="back-to-home">Back To Home</Link>
    </div>
  );
};

export default PageNotAvailable;
