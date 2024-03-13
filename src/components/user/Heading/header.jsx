import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <>
      {/* <div className="topofpage">
        <div className="container-fluid pt-2 pb-2">
          <div className="row">
            <div className="col text-left">Left</div>
            <div className="col text-center">
              <div className="middle">Center</div>
            </div>
            <div className="col text-right">
              <div className="right">Right</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="secondnav">
        <div className="textColor">
          <div className="row align-items-center w-100">
            <div className="col-lg-5">
              <div className="d-none d-lg-block">
                <img
                  className="img-fluid mt-1 mb-1 bannerlogo"
                  src="./src/assets/Bannerr.png"
                  alt="Unvailable"
                />
              </div>
            </div>
            <div className="col-4 col-lg-2 sideLine">
              <div className="d-flex justify-content-center align-items-center">
                <div className=" d-none me-3 p-3 py-3">
                  <i className="fas fa-city icons"></i>
                </div>
                <div className="d-none d-lg-block">
                  <span className="fw-medium">Opening Hour</span> <br />
                  10:00AM - 5:00PM
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-2 sideLine">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-none me-3 p-3 py-3">
                  <i className="fas fa-phone-alt icons"></i>
                </div>

                <div className="d-none d-lg-block">
                  <span className="fw-medium">Call Us</span>
                  <br /> Contact
                </div>
              </div>
            </div>
            <div className="col-4 col-lg-2 sideLine">
              <div className="d-flex justify-content-center align-items-center">
                <div className=" d-none me-3 p-3 py-5">
                  <i className="fas fa-envelope icons"></i>
                </div>

                <div className="d-none d-lg-block">
                  <span className="fw-medium">Email Us</span>
                  <br />
                  email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="navbarBgDark sticky-top" data-bs-theme="dark">
        <nav
          className=" navbar-expand-lg justify-content-center white"
          height="50px"
        >
          <button
            className="navbar-toggler pt-3 pb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white", marginLeft: "-10px" }}
          >
            <i className="fas fa-bars "></i>
            <div className="col-8 text-white float-right text-right">PMS</div>
          </button>

          <div
            className="Navvybar collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav text-uppercase pt-3 pb-3">
              <li className="nav-item">
                <Link className="nav-link active pe-3" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/service">
                  Service
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-lg-3" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* <div className="text-white m-1 p-3">
              <Link className="nav-link active pe-3" to="/parking">
                <button
                  type="button"
                  className="btn getBtn border border-white rounded-4 text-white"
                >
                  Park Now
                </button>
              </Link>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
