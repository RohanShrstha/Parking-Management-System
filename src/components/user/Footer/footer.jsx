import React from "react";
import "./footer.css";

function footer() {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <footer className="w-100 flex-shrink-0">
          <div className="container pt-4">
            <div className="row ">
              <div className="col-lg-4 col-md-6 mt-4">
                <h5 className="h1 text-white">PMS</h5>
                <p className=" text-muted footerdesc">
                  Parking recommendation system is a technology-driven solution
                  designed to help drivers find available parking spaces
                  efficiently
                </p>
                <p className="small text-muted pb-1">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a className="text-primary" href="parking.com">
                    Name Here
                  </a>
                </p>
              </div>
              <div
                className="col-lg-3 col-md-6 mt-4"
                style={{ paddingLeft: "10%" }}
              >
                <h5 className="text-white mb-3">Links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>

                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <h5 className="text-white mb-3">Useful Links</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a href="https://www.mdpi.com/2071-1050/15/8/6808">
                      Parking Recommendation Methods
                    </a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default footer;
