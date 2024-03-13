import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { useFormik } from "formik";

function Login() {
  const parkingApiUrl = "http://localhost:8080/parking";
  const navigate = useNavigate();

  const [fail, setFail] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(parkingApiUrl);
        const responseData = await response.json();
        const parkingData = responseData.data;

        if (parkingData.length > 0) {
          const user = parkingData.find(
            (user) => user.parking_email === values.email
          );
          if (user && user.parking_password === values.password) {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                email: values.email,
                parking_id: user.parkingId,
              })
            );
            navigate(`/admin/profile`, { replace: true });
          } else {
            setErrorMsg("Invalid email or password");
            setFail(true);
          }
        } else {
          setErrorMsg("No parking data available in the API response");
          setFail(true);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    enableReinitialize: true,
  });

  return (
    <>
      <section className="">
        <div className="container-fluid h-custom mt-5 pt-4">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://cdn.dribbble.com/users/1287580/screenshots/5410442/dribbble_2.gif"
                className="img-fluid  pt-5"
                alt="Unavailable"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="divider d-flex align-items-center my-4">
                  <h2 className="text-center fw-bold fs-4 ">Login </h2>
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    id="email"
                    label="Enter your Email"
                    variant="outlined"
                    className="form-control form-control-lg"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error-message ml-2 mt-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="form-outline mb-3">
                  <TextField
                    id="password"
                    type="password"
                    label="Enter your password"
                    variant="outlined"
                    className="form-control form-control-lg "
                    aria-invalid="false"
                    value={formik.values.password}
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="on"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error-message ml-2 mt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <NavLink
                    className="link-danger no-underline bg-white text-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Forgot password?
                  </NavLink>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Did you really forget?
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Please be relax and try to remember your password. So
                        that you can try again.
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center text-lg-center mt-3">
                  <button
                    type="submit"
                    className="btn logbtn btn-primary btn-lg"
                  >
                    Log in
                  </button>
                  {fail && errorMsg && (
                    <div className="error-message mt-2">{errorMsg}</div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
