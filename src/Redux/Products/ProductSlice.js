import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./ProductService";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
};

//All Products
export const getProducts = createAsyncThunk(
  "allProducts",
  async (numOfProduct, thunkAPI) => {
    try {
      return await productService.getProducts(numOfProduct);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Filtered Products
export const getProductsByCatagory = createAsyncThunk(
  "products/catogery",
  async (categoryId, thunkAPI) => {
    try {
      console.log(categoryId)
      return await productService.getProductsByCategory(categoryId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Single Product
export const singleProduct = createAsyncThunk(
  "singleProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.products = null;
        state.isLoading = false;
      })
      .addCase(getProductsByCatagory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCatagory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductsByCatagory.rejected, (state) => {
        state.products = null;
        state.isLoading = false;
      })
      .addCase(singleProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(singleProduct.rejected, (state) => {
        state.products = null;
        state.isLoading = false;
      })
  },
});

export default productSlice.reducer;
