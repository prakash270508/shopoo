import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/second_hero.54e92a4305d8302c245006b1e8c8a10c.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                color: "black",
                marginBottom: "15vw",
                marginLeft: "-50vw",
              }}
            >
              <h5 style={{ color: "#bd744c" }}>Chairs</h5>
              <h2
                style={{ fontSize: "35px", fontWeight: "500" }}
                className="my-2"
              >
                Get All
              </h2>
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                ALL GOOD STUFF
              </h1>
              <Link to={"/products"}>
                <button className="btn viewBtn">
                  View More Products <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/first_hero.e7fe7598b3d23101534ffaa1817549d6.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                color: "black",
                marginBottom: "15vw",
                marginLeft: "-15vw",
              }}
            >
              <h5 style={{ color: "#bd744c" }}>Chairs</h5>
              <h2
                style={{ fontSize: "35px", fontWeight: "500" }}
                className="my-2"
              >
                Get All
              </h2>
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                ALL GOOD STUFF
              </h1>
              <Link to={"/products"}>
                <button className="btn viewBtn">
                  View More Products <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://flatlogic-ecommerce.herokuapp.com/_next/static/media/bg.450cfc7781058eb8f7c3e254a483d147.png"
              className="d-block w-100"
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{
                color: "black",
                marginBottom: "15vw",
                marginLeft: "-50vw",
              }}
            >
              <h5 style={{ color: "#bd744c" }}>Chairs</h5>
              <h2
                style={{ fontSize: "35px", fontWeight: "500" }}
                className="my-2"
              >
                Get All
              </h2>
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                ALL GOOD STUFF
              </h1>
              <Link to={"/products"}>
                <button className="btn viewBtn">
                  View More Products <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
