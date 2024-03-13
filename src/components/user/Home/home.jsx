import React, { useState, useEffect } from "react";
import Header from "../Heading/header";
import Footer from "../Footer/footer";
import Parking from "../Parking/parking";
import "./home.css";

function home() {
  return (
    <>
      <Parking />
      {/* <Header />

      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="./src/assets/Caros1.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./src/assets/Caros2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="./src/assets/Caros3.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>


      <div className="container pt-4">
        <h4>Our Services</h4>
        <p className="text-muted" style={{ fontSize: "18px" }}>
          Parking Management System (PMS) is a comprehensive solution designed
          to efficiently manage parking facilities, including parking lots,
          garages, and on-street parking spaces. Here are the key components and
          functionalities of a PMS:
        </p>
        <div className="row row-cols-1 row-cols-lg-3 ">
          <div className="feature col pb-4">
            <div className="d-inline-flex mb-3">
              <img
                className="d-block w-100"
                src="./src/assets/Service1.jpg"
                alt="Second slide"
              />
            </div>
            <h5 className="fs-2 text-body-emphasis">
              Dynamic Information Display
            </h5>
            <p>
              When a parking facility reaches full capacity, the PMS updates its
              information display systems, such as digital signage or mobile
              apps, to inform drivers that the facility is full.
            </p>
          </div>
          <div className="feature col pb-4">
            <div className="d-inline-flex mb-3">
              <img
                className="d-block w-100"
                src="./src/assets/Service2.jpg"
                alt="Second slide"
              />
            </div>
            <h5 className="fs-2 text-body-emphasis">Parking Information</h5>
            <p>
              PMS provide real-time information about parking availability and
              guide drivers to vacant parking spaces, reducing congestion and
              improving the parking experience.
            </p>
          </div>
          <div className="feature col pb-4">
            <div className="d-inline-flex mb-3">
              <img
                className="d-block w-100"
                src="./src/assets/Service3.jpg"
                alt="Second slide"
              />
            </div>
            <h5 className="fs-2 text-body-emphasis">
              Customer Service and Support
            </h5>
            <p>
              PMS provides customer support and assistance to drivers,
              addressing inquiries, issues, and complaints promptly to ensure a
              positive parking experience.
            </p>
          </div>
        </div>
      </div>


      <div className="mt-3 mb-5">
        <div className="container">
          <h4>About Us</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
            <section className="col">
              <p
                className="fs-5"
                style={{
                  textAlign: "justify",
                  lineHeight: "32px",
                  paddingRight: "6px",
                }}
              >
                Parking Recommendation System for Kathmandu City simplifies the
                urban parking experience. By utilizing GPS technology and
                real-time data, the system locates parking facilities quickly
                and provides users with up-to-date occupancy status information.
                When the nearest parking space fills up quickly, other adjacent
                options are recommended to minimize disruption and maximize time
                efficiency for cars traversing Kathmandu's busy streets.
                Specifically designed to meet the demands of Kathmandu's
                distinct features, this system offers personalized suggestions
                that take into account the varied parking arrangements and
                traffic patterns of the city, improving overall urban mobility
                and convenience for locals, commuters, and tourists.
              </p>
            </section>
            <div className="col">
              <img
                src="./src/assets/about.jpg"
                className="w-100"
                alt="Photo Here"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}
    </>
  );
}

export default home;
