import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsByCatagory,
} from "../../Redux/Products/ProductSlice";
import Products from "../layouts/Product/Products";
import { category } from "../utils/Filters";
import PageTitle from "./PageTitle";

export default function AllProducts() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(100));
  }, [dispatch]);

  return (
    <div className="container">
      <PageTitle title="Shopooo | Allproducts"/>
      <div className="row">
        <div
          className="col-3"
          style={{
            height: "1000vw",
            marginTop: "5vw",
            fontFamily: "system-ui",
          }}
        >
          <h3
            style={{
              textAlign: "center",
            }}
          >
            Filters
          </h3>
          <div className="my-4">
            <h4>Category</h4>
            <div>
              {category &&
                category.map((ele) => (
                  <button
                    style={{ display: "grid" }}
                    className="catBtn btn"
                    onClick={() => {
                      dispatch(getProductsByCatagory(ele.value));
                    }}
                    key={ele.name}
                  >
                    <div>
                      <li>{ele.name}</li>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
        <div
          className="col-9"
          style={{
            height: "1000vw",
            marginTop: "5vw",
          }}
        >
          <div className="row">
            {products &&
              products.map((items) => (
                <Products product={items} key={items.id} col="3" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
