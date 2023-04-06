import React from "react";
import ReactStars from "react-rating-stars-component";

export default function ReviewCard() {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ff8d79",
    value: 4,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <div>
      <div className="d-flex">
        <div>
          <img
            src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
            alt=""
            className="roundedImage"
          />
        </div>
        <div className="mx-5">
            <h5 className="text-dark">Jane Dobson</h5>
            <ReactStars {...options}/>{" "}
            <p className="text-muted my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam.</p>
        </div>
      </div>
    </div>
  );
}
