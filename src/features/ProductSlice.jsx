import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => res.products);
    return response;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (selectedCategory) => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${selectedCategory}`
    )
      .then((res) => res.json())
      .then((res) => res.products);
    return response;
  }
);

export const fetchProductsBySearch = createAsyncThunk(
  "products/fetchProductsBySearch",
  async (searchInput) => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchInput}`
    )
      .then((res) => res.json())
      .then((res) => res.products);
    return response;
  }
);

const initialState = {
  products: [],
  searchInput: "",
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    addToCart(state, action) {
      const existingProductIndex = state.cart.findIndex(
        (element) => element.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = state.cart.map((product, index) =>
          index === existingProductIndex
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    },
    removeFromCart(state, action) {
      const updatedArray = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updatedArray;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        return { ...state, products: action.payload };
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        return { ...state, products: action.payload };
      })
      .addCase(fetchProductsBySearch.fulfilled, (state, action) => {
        return { ...state, products: action.payload };
      });
  },
});

export const { setSearchInput, addToCart, removeFromCart, clearCart } =
  productSlice.actions;
export const getAllProducts = (state) => state.product.products;
export default productSlice.reducer;
