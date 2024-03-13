import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Heading/header";
import Footer from "../Footer/footer";
import { IoLocationSharp, IoCallSharp, IoMail } from "react-icons/io5";

function Contact() {
  return (
    <>
      <Header />
      <img
        src="./src/assets/contactcover.jpg"
        alt="Contact"
        className="w-100"
      />
      <div className="container-fluid d-flex align-items-center justify-content-center pt-1 pb-1">
        <div className="text-center">
          <h2 className="">Contact Us</h2>
        </div>
      </div>

      <div className="justify-content-center ">
        <div className="site-section ">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 mb-5 fs-6">
                <form className="contact-form ">
                  <div className="row form-group mb-2">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <input
                        type="text"
                        id="messageName"
                        name="messageName"
                        className="form-control fs-5"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="row form-group  mb-2">
                    <div className="col-md-12">
                      <input
                        type="messageEmail"
                        id="messageEmail"
                        name="messageEmail"
                        className="form-control  fs-5"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="row form-group  mb-2">
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="messageSubject"
                        name="messageSubject"
                        className="form-control  fs-5"
                        placeholder="Enter Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12">
                      <textarea
                        name="messageDescription"
                        id="messageDescription"
                        cols="30"
                        rows="5"
                        className="form-control  fs-5"
                        placeholder="Say hello to us"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row form-group">
                    <div className="col-md-12 mt-2">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-2 px-4 w-100"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-4 fs-5 mb-5">
                <div className="p-2 ml-4 bg-white">
                  <h5 className="h5 text-black mb-3 fs-3">Contact Info</h5>
                  <div className="d-flex align-items-center mb-2">
                    <IoLocationSharp
                      style={{ fontSize: "3rem", marginRight: "1rem" }}
                    />
                    <div>
                      <p className="mb-0 font-weight-bold text-black">
                        Address
                      </p>
                      <p className="mb-4 text-black">
                        Kalanki, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IoCallSharp
                      style={{ fontSize: "3rem", marginRight: "1rem" }}
                    />
                    <div>
                      <p className="mb-0 font-weight-bold text-black">Phone</p>
                      <p className="mb-4">
                        <a href="#"> 01-4444444</a>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IoMail style={{ fontSize: "3rem", marginRight: "1rem" }} />
                    <div>
                      <p className="mb-0 font-weight-bold text-black">
                        Email Address
                      </p>
                      <p className="mb-0">
                        <a href="#">parking@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.74959973688584!2d85.28227169997986!3d27.717484008855152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19081c08653b%3A0x8755806b71f9c857!2sSarvamanya%20saving%20and%20credit%20co-operative%20ltd!5e0!3m2!1sen!2snp!4v1707236155486!5m2!1sen!2snp"
          width="100%"
          height="400"
          allowullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
