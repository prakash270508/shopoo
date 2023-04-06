import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalItem: 0,
  grocePrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      const newItem = action.payload;

      const existProduct = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existProduct) {
        existProduct.quantity++;
        existProduct.totalPrice += existProduct.price;
        state.grocePrice += existProduct.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          image: newItem.images[0],
          quantity: 1,
        });
        state.grocePrice += newItem.price;
        state.totalItem++;
      }
    },
    removeCart(state, action) {
      const newItemitem = action.payload;

      const existProduct = state.itemList.find(
        (item) => item.id === newItemitem.id
      );

      if (existProduct) {
        state.totalItem--;
        state.grocePrice -= existProduct.totalPrice;
        state.itemList = state.itemList.filter((ele) => ele.id !== newItemitem.id);
      }
    },
    addCartOnPlus(state, action) {
      const newItem = action.payload;

      const existProduct = state.itemList.find(
        (item) => item.id === newItem.id
      );

      if (existProduct) {
        existProduct.quantity++;
        existProduct.totalPrice += existProduct.price;
        state.grocePrice += existProduct.price;
      }
    },
    removeCartOnMinus(state, action) {
      const newItem = action.payload;

      const existProduct = state.itemList.find(
        (item) => item.id === newItem.id
      );


      if (existProduct) {
        existProduct.quantity--;
        existProduct.totalPrice -= existProduct.price;
        state.grocePrice -= existProduct.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
