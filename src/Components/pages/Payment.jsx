import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../layouts/Footer";
import PageTitle from "./PageTitle";

export default function Payment() {
  const { grocePrice } = useSelector((stste) => stste.cart);

  const option = [];
  const year = [];

  for (let i = 2015; i <= 2023; i++) {
    year.push(i);
  }

  for (let i = 1; i <= 9; i++) {
    option.push(i);
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  return (
    <div>
        <PageTitle title={"Shopooo | Payment"}/>
      <div
        className="container"
        style={{ marginTop: "6vw", marginBottom: "2vw" }}
      >
        <h2>
          <b>Billing Info</b>
        </h2>
        <p className="text-muted">
          Choose a payment option below and fill out the aproriate infomation
        </p>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-7" style={{ marginRight: "4vw" }}>
              <h2>
                <b>Billing Address</b>
              </h2>
              <br />
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="First name"
                />
              </div>
              <div className="row">
                <div className="mb-3 col-8">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Country</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="eg. India"
                  />
                </div>
                <div className="mb-3 col-4">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>City</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="City name"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-7">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Street</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 col-5">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Apt / Suite / Other</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-4">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Postcode</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3 col-4">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>Phone</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="+375 (29)"
                  />
                </div>
                <div className="mb-3 col-4">
                  <label for="exampleInputEmail1" className="form-label">
                    <b>ZIP Code</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="col-3 px-4" style={{ backgroundColor: "#f0f0f0" }}>
              <div className="py-4">
                <h3>
                  <b>Credit Card Info</b>
                </h3>
                <div className="my-3">
                  <label for="exampleInputEmail1" className="form-label mx-1">
                    <b>Name on card</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="my-3">
                  <label for="exampleInputEmail1" className="form-label mx-1">
                    <b>Card Number</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <b className="mx-1">Exp Date</b>
                    <select
                      class="form-select form-select-lg mb-3 my-1"
                      aria-label=".form-select-lg example"
                      style={{ height: "2vw" }}
                    >
                      <option selected></option>
                      {option.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <b className="mx-1">Exp year</b>
                    <select
                      class="form-select form-select-lg mb-3 my-1"
                      aria-label=".form-select-lg example"
                      style={{ height: "2vw" }}
                    >
                      <option selected></option>
                      {year.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <b className="mx-1">CVV</b>
                  <input
                    type="number"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="eg. 123"
                  />
                </div>
              </div>
              <button type="submit" className="checkOutBtn">
                Place Order ${grocePrice}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
