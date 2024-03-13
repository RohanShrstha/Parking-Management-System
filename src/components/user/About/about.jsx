import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Heading/header";
import Footer from "../Footer/footer";

function About() {
  return (
    <>
      <Header />
      <img src="./src/assets/aboutcover.jpg" alt="About" className="w-100" />
      <div className="container-fluid d-flex align-items-center justify-content-center pt-2 pb-2">
        <div className="text-center">
          <h2 className="display-5">About Us</h2>
        </div>
      </div>

      <div className="mb-5">
        <div className="container">
          <div className="row">
            <section>
              <p
                style={{
                  textAlign: "justify",
                  lineHeight: "32px",
                  fontSize: "18px",
                  padding: "0 4%",
                }}
              >
                By effortlessly directing customers to the closest parking
                places, the Parking Recommendation System for Kathmandu City
                simplifies the urban parking experience. By utilizing GPS
                technology and real-time data, the system locates parking
                facilities quickly and provides users with up-to-date occupancy
                status information. When the nearest parking space fills up
                quickly, other adjacent options are recommended to minimize
                disruption and maximize time efficiency for cars traversing
                Kathmandu's busy streets. Specifically designed to meet the
                demands of Kathmandu's distinct features, this system offers
                personalized suggestions that take into account the varied
                parking arrangements and traffic patterns of the city, improving
                overall urban mobility and convenience for locals, commuters,
                and tourists.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
