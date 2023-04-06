import React from "react";
import ReactStars from "react-rating-stars-component";

export default function Reviews() {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: 4.5,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };

  return (
    <div className="d-flex">
      <div>
        <ReactStars {...options} />{" "}
      </div>
      <div className="mx-3 my-2">
        <span className="text-danger">7</span><span className="text-dark text-uppercase"> Reviews</span>
      </div>
    </div>
  );
}
