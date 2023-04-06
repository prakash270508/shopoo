import React from "react";
import CartItems from "../layouts/Cart/CartItems";
import { FaLongArrowAltLeft, FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartPayment from "../layouts/Cart/CartPayment";
import Footer from "../layouts/Footer";
import { useSelector } from "react-redux";
import PageTitle from "./PageTitle";

export default function Cart() {
  const { itemList } = useSelector((state) => state.cart);

  return (
    <div>
      <PageTitle title="Shopooo | Cart"/>
      <section
        className="container h-100 h-custom"
        style={{ marginTop: "2vw" }}
      >
        <div className="py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-8">
                      <h5 className="mb-3">
                        <Link to={"/"} className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2">
                            <FaLongArrowAltLeft />
                          </i>{" "}
                          Continue shopping
                        </Link>
                      </h5>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <h2 className=" my-3 text-dark">Shopping cart</h2>
                          <p className="mb-0 my-2 tet-muted">
                            You have 4 items in your cart
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="mx-2" style={{ marginBottom: "-1vw" }}>
                          <div className="d-flex justify-content-between text-muted">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <h5 className="mx-1">PRODUCT</h5>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <h5 style={{ marginLeft: "17vw" }}>QUANTITY</h5>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mx-2">
                              <div>
                                <h5 style={{ marginRight: "3vw" }}>PRICE</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {itemList.length === 0 ? (
                        <div>
                          <h2>
                            {" "}
                            <b>No Item in cart</b>{" "}
                          </h2>
                        </div>
                      ) : (
                        itemList.map((item) => (
                          <CartItems product={item} key={item.id} />
                        ))
                      )}
                    </div>
                    <div className="col-lg-4">
                      <CartPayment />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
