import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartPayment() {
  const { grocePrice, totalItem } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="cartPayment">
        <div className="mx-3">
          <div className="text-dark">
            <h2 className="my-3">Cart Total</h2>
            <br />
            <h6>
              <b>
                Subtotal: <span className="mx-4">${grocePrice}</span>{" "}
              </b>
            </h6>
            <h6>
              <b>
                Total Product: <span className="mx-2">{totalItem}</span>{" "}
              </b>
            </h6>
            <hr className="text-muted" />
            <br />
            <div>
              <h6>
                <b>Shipping: </b>
                <span className="mx-3">
                  <b>Free Shipping</b>
                </span>{" "}
              </h6>
            </div>
            <p className="text-muted" style={{ marginLeft: "6vw" }}>
              Shipping options will be updated during checkout.
            </p>
            <hr className="text-muted" />
            <br />
            <h5>
              <b>
                Total: <span className="mx-4">${grocePrice}</span>{" "}
              </b>
            </h5>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <Link to={'/payment'}>
      <button className="checkOutBtn">Check Out</button>
      </Link>
    </div>
  );
}
