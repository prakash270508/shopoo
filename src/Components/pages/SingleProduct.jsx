import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProduct } from "../../Redux/Products/ProductSlice";
import ReviewCard from "../layouts/Product/ReviewCard";
import Reviews from "../layouts/Product/Reviews";
import { cartAction } from "../../Redux/Cart/cartSlice";
import PageTitle from "./PageTitle";

export default function SingleProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  const { title, price, images } = product;

  const handleClick = () => {
    dispatch(
      cartAction.addCart({
        title,
        id,
        price,
        images,
      })
    );
  };

  useEffect(() => {
    dispatch(singleProduct(id));
  }, [dispatch, id]);

  return (
    <div className="product container" style={{ marginTop: "5vw" }}>
      <PageTitle title={`Shopooo | ${title}`} />
      <div className="d-flex text-muted">
        <div>Product -- </div>
        {product.category && (
          <div className="text-muted">{product.category.name} -- </div>
        )}
        <div> {product.title}</div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <div className="image-container">
            {product.images && product.images.length > 0 && (
              <img src={product.images[0]} alt="" className="zoom-on-hover" />
            )}
          </div>
        </div>
        <div className="col-6">
          <div className="mx-4">
            {product.category && (
              <div className="text-muted">{product.category.name}</div>
            )}
            <h3 className="text-dark my-3">{product.title}</h3>
            <p className="text-muted">{product.description}</p>

            <br />
            <br />
            <div className="quantity d-flex">
              {/* <div>
                <h5
                  className="text-dark mx-1"
                  style={{ marginBottom: "-0.2vw" }}
                >
                  QUANTITY
                </h5>
                <div className="d-flex">
                  <div>
                    <button
                      className=" custom-btn"
                      style={{ outline: "none" }}
                      onClick={() => console.log("Clicked")}
                    >
                      <b>-</b>
                    </button>
                  </div>
                  <b className="text-dark mx-2 my-2">5</b>
                  <div>
                    <button className="custom-btn " style={{ outline: "none" }}>
                      <b>+</b>
                    </button>
                  </div>
                </div>
              </div> */}
              <div className=" text-dark ">
                <b>
                  <div>Price</div>
                  <div>${product.price}</div>
                </b>
              </div>
            </div>
            <br />
            <br />
            <div>
              <Reviews />
            </div>
            <br />
            <br />
            <div className="d-flex" style={{ marginTop: "7vw" }}>
              <button
                type="button"
                className="flex-fill mr-4 text-uppercase fw-bold btn btn-outline-danger mx-2"
                style={{ width: "50%" }}
                onClick={handleClick}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="text-uppercase fw-bold btn btn-danger"
                style={{ width: "50%" }}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <h3 className="text-dark text-uppercase">Reviews</h3>
      <br />
      <ReviewCard />
      <br />
    </div>
  );
}
