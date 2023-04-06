import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Redux/Cart/cartSlice";

export default function CartItems({ product }) {
  const { image, name, totalPrice, quantity, id, price } = product;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      cartAction.addCartOnPlus({
        id,
      })
    );
  };

  const handleSub = () => {
    dispatch(cartAction.removeCartOnMinus({ id }));
  };

  const handleRemove = () => [dispatch(cartAction.removeCart({ id }))];

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src={image}
                  className="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: "65px" }}
                />
              </div>
              <div className="ms-3">
                <h5>{name}</h5>
                <p className="text-muted">${price}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <h4
                className="d-flex"
                style={{ width: "50px", marginRight: "10vw" }}
              >
                <button
                  className={
                    quantity > 0
                      ? "fw-normal custom-btn"
                      : " custom-btn btn disabled"
                  }
                  onClick={handleSub}
                >
                  -
                </button>
                <h5 className="fw-normal pt-3">{quantity}</h5>
                <button
                  className="fw-normal mb-0 custom-btn"
                  onClick={handleAdd}
                >
                  +
                </button>
              </h4>
              <div style={{ width: "80px" }}>
                <h5 className="mb-0">${totalPrice}</h5>
              </div>
              <p style={{ color: "#cecece" }}>
                <button className="custom-btn" onClick={handleRemove}>
                  <FaTrash />
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
