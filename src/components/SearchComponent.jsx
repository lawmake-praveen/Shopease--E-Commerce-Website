import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchAllProducts, fetchProductsByCategory, fetchProductsBySearch } from "../features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../features/ProductSlice";

const SearchComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const searchInput = useSelector((state) => state.product.searchInput)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProductsBySearch(searchInput))
  };
  const searchInputChange = (e) => {
    dispatch(setSearchInput(e.target.value))
    if(!e.target.value){
      dispatch(fetchAllProducts())
    }
  }
  const dispatch = useDispatch();
  const categoryChanged = (category) => {
    if(category !== 'All Categories'){
      dispatch(fetchProductsByCategory(category));
    }else {
      dispatch(fetchAllProducts())
    }
  };
  const allCategories = [
    "All Categories",
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home-decoration",
    "Furniture",
    "Tops",
    "Womens-dresses",
    "Womens-shoes",
    "Mens-shirts",
    "Mens-shoes",
    "Mens-watches",
    "Womens-watches",
    "Womens-bags",
    "Sunglasses",
    "Automotive",
    "Motorcycle",
    "Lighting",
  ];

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input s-common"
          placeholder="Search Products"
          onChange={searchInputChange}
        />
        <button type="submit" className="search-btn s-common">
          <AiOutlineSearch />
        </button>
      </form>
      <select
        name="category"
        className="category"
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          categoryChanged(e.target.value);
        }}
        value={selectedCategory}
      >
        {allCategories.map((item) => {
          return (
            <option
              value={item}
              style={{ textTransform: "capitalize" }}
              key={item}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchComponent;
