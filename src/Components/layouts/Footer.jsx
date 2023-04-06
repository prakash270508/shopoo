import React from "react";
import {FaGooglePlus, FaFacebook, FaCodepen, FaTwitter, FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <div class="">
        <footer class="text-white text-center text-lg-start bg-dark">
          <div class="container p-4">
            <div class="row mt-4">
              <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">About company</h5>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                <div class="mt-4">
                  <a type="button" class="btn btn-floating btn-dark btn-lg">
                    <i><FaFacebook /></i>
                  </a>

                  <a type="button" class="btn btn-floating btn-dark btn-lg">
                    <i class="fab fa-dribbble"><FaCodepen /></i>
                  </a>

                  <a type="button" class="btn btn-floating btn-dark btn-lg">
                    <i class="fab fa-twitter"><FaTwitter /></i>
                  </a>

                  <a type="button" class="btn btn-floating btn-dark btn-lg">
                    <i class="fab fa-google-plus-g"><FaGooglePlus/></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

                <div class="form-outline form-white mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    class="form-control form-control-lg"
                    placeholder="Search"
                  />
                </div>

                <ul class="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-home"><FaHome /></i>
                    </span>
                    <span class="ms-2">Warsaw, 00-967, Poland</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-envelope"><FaEnvelope /></i>
                    </span>
                    <span class="ms-2">contact@example.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li">
                      <i class="fas fa-phone"><FaPhoneAlt /></i>
                    </span>
                    <span class="ms-2">+ 48 234 567 88</span>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase mb-4">Opening hours</h5>

                <table class="table text-center text-white">
                  <tbody class="fw-normal">
                    <tr>
                      <td>Mon - Thu:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Fri - Sat:</td>
                      <td>8am - 1am</td>
                    </tr>
                    <tr>
                      <td>Sunday:</td>
                      <td>9am - 10pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              shopooo.com
            </a>
          </div>
        </footer>
      </div>
      |
    </div>
  );
}
