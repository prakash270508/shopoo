import React from "react";
import { Container} from "react-bootstrap";
import {Link} from 'react-router-dom'
import PageTitle from "./PageTitle";

const Login = () => {
  return (
    <Container>
      <PageTitle title={"Shopooo | Login"}/>
      <div className="row">
        <div className="col-6 mx-4" style={{ marginTop: "8vw" }}>
          <h3>
            <b>Login</b>
          </h3>
          <br />
          <br />
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                <b>Email address</b>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                <b>Password</b>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Your Password"
              />
            </div>
            <div className="d-flex">
                <Link className="mx-5 my-5 links" to={'/register'}>Create an account</Link>
              <button type="submit" className="checkOutBtn my-3">
                <b>Login</b>
              </button>
            </div>
          </form>
          <br />
          <br />
          <br />
          <div className="d-flex">
                <Link className=" my-5 links">Terms & Conditions</Link>
                <Link className="mx-5 my-5 links">Privacy Policy</Link>
                <Link className=" my-5 links">Forgot password</Link>
              
            </div>
        </div>
        <div className="col-5">
            <img src="	https://flatlogic-ecommerce.herokuapp.com/_next/static/media/bg.906ad1378ec90ffcd11843d18652d6ed.svg" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
