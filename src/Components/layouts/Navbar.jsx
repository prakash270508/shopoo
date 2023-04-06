import React from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropDownHover from "../utils/DropDownHover";

export default function Navbar() {
  const { totalItem } = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mx-5">
          <h2 className="navbar-brand mx-5">Shopooo</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 "
              style={{ marginLeft: "20vw" }}
            >
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <DropDownHover
                name={"Page"}
                items={["Action", "Another Action", "Something Else Here"]}
              />
              <DropDownHover
                name={"Blog"}
                items={["Action", "Another Action", "Something Else Here"]}
              />
            </ul>
            <div className="d-flex mx-5">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    <FaSearch />
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <Link to={"/login"} className="nav-link " aria-current="page">
                    <FaUser />
                  </Link>
                </li>
                <li className="nav-item d-flex">
                  <Link to={"/cart"} className="nav-link " aria-current="page">
                    <FaShoppingCart />
                  </Link>
                  <div style={{ marginLeft: "-7px", marginTop: "2px" }}>
                    {totalItem > 0 && totalItem}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
