import React from "react";
import {FaHeart, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Products({ product, col, mx }) {
  const { title, price, category, images, id } = product;

  return (
    <div className={`col-lg-${col} col-md-12 mb-4 mx-${mx}`}>
      <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
        <div className="product ">
          <img
            src={
              images.length > 0
                ? images[0]
                : "https://www.toolworld.in/storage/media/product/noimage.png"
            }
            className="productImage zoom"
            alt="productimage"
          />
          <div className="text-muted">{category.name}</div>
          <h5 className="text-bold">{title}</h5>
          <h6 className="text-secondary">${price}</h6>
          {/* <div className="sideOptions">
            <div><FaHeart /></div>
            <div className="my-1"><FaPlus /></div>
            <div><FaShoppingCart/></div>
          </div> */}
        </div>
      </Link>
    </div>
  );
}
