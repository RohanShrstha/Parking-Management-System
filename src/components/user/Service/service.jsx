import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Heading/header";
import Footer from "../Footer/footer";
import { IoLocationSharp, IoCallSharp, IoMail } from "react-icons/io5";

function Service() {
  return (
    <>
      <Header />
      <img
        src="./src/assets/servicecover.jpg"
        alt="Service"
        className="w-100"
      />
      <div className="container-fluid d-flex align-items-center justify-content-center pt-2 pb-2">
        <div className="text-center">
          <h2 className="display-5">Services</h2>
        </div>
      </div>

      {/* Services */}
      <div className="container ">
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

      <Footer />
    </>
  );
}

export default Service;
