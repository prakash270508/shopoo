import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/ProductSlice";
import Banner from "../layouts/Banner";
import Banner2 from "../layouts/Banner2";
import Carousel from "../layouts/Carousel";
import Footer from "../layouts/Footer";
import MainProduct from "../layouts/Product/MainProduct";
import PageTitle from "./PageTitle";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(10));
  }, [dispatch]);

  return (
    <div>
      <PageTitle title={"Shopooo"}/>
      <Carousel />
      <MainProduct />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
}
