import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MainProduct() {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <div
        className="container my-5"
        style={{ textAlign: "center", fontFamily: "system-ui" }}
      >
        <h2>New Arrivels</h2>
        <p className="text-muted my-2">
          Check out our new furniture collection! Cozy sofa, fancy chair,{" "}
          <p>
            wooden casket, and many more. The new collection brings an informal
            elegance to your home.
          </p>{" "}
        </p>
      </div>
      <div className="container">
        <div className="row">
          {products &&
            products.map((item) => <Products product={item} key={item.id} col='2' mx='3'/>)}
          <Link to={'/products'}> 
            <button className="btn viewBtn mb-5">
              View More Products <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
