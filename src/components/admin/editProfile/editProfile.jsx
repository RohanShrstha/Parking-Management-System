import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useUpdate from "../customHooks/useUpdate";
import Swal from "sweetalert2";

const editProfile = () => {
  const { parking_id } = useParams();
  const sessionUser = JSON.parse(localStorage.getItem("auth"));
  const [parkingData, setParkingData] = useState(null);
  const { fetchData, isFetchLoading, fetchError } = useFetch(
    `http://localhost:8080/parking/id/${sessionUser.parking_id}`
  );

  useEffect(() => {
    setParkingData(fetchData);
  }, [fetchData]);

  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { handleUpdate, isUpdateLoading, updateData, updateError } = useUpdate(
    `http://localhost:8080/parking/add`
  );

  useEffect(() => {
    if (updateData) {
      setParkingData(updateData);
      setUpdateSuccess(true);
    }
  }, [updateData]);

  useEffect(() => {
    if (updateSuccess) {
      Swal.fire({
        icon: "success",
        title: "Profile Changed Successfully",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        setUpdateSuccess(false);
        window.location.href = "/admin/profile";
      });
    }
  }, [updateSuccess]);

  const updateParkingData = (values) => {
    fetchData.data.parking_name = values.parking_name;
    fetchData.data.parking_email = values.parking_email;
    fetchData.data.parking_status = values.parking_status;
    fetchData.data.parking_contact = values.parking_contact;
    fetchData.data.parking_price = values.parking_price;
    fetchData.data.parking_twowheel_capacity = values.parking_twowheel_capacity;
    fetchData.data.parking_fourwheel_capacity =
      values.parking_fourwheel_capacity;
    fetchData.data.parking_openingTime = values.parking_openingTime;
    fetchData.data.parking_closingTime = values.parking_closingTime;
    handleUpdate(fetchData.data);
  };

  return (
    <>
      {parkingData ? (
        <div style={{ marginLeft: "14.5rem" }}>
          {/* Render profile data here */}
          <div className="pl-4 pt-4 pb-4">
            <h1>Edit Profile</h1>
          </div>

          <div className="pl-3 pb-3">
            <ul className="list-group " style={{ width: "200%" }}>
              <li className="list-group-item list-group-item-action">
                <div>
                  <div className="font-weight-bold">Name</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Name"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData && fetchData.data && fetchData.data.parking_name
                    }
                  />
                </div>
              </li>
              <li className="list-group-item list-group-item-action">
                <div>
                  <div className="font-weight-bold">Email</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="E-mail"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_email
                    }
                  />
                </div>
              </li>
              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Contact Number</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Contact"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_contact
                    }
                  />
                </div>
              </li>

              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Parking Status</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Status"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_status
                    }
                  />
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="row">
                  <div className="col-6">
                    <div className="font-weight-bold">Two Wheeler Capacity</div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="twowheel_capacity"
                      aria-describedby="basic-addon1"
                      defaultValue={
                        fetchData &&
                        fetchData.data &&
                        fetchData.data.parking_twowheel_capacity
                      }
                    />
                  </div>
                  <div className="col-6">
                    <div className="font-weight-bold">
                      Four Wheeler Capacity
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="fourwheel_capacity"
                      aria-describedby="basic-addon1"
                      defaultValue={
                        fetchData &&
                        fetchData.data &&
                        fetchData.data.parking_fourwheel_capacity
                      }
                    />
                  </div>
                </div>
              </li>

              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Parking Price</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="parking_price"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_price
                    }
                  />
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="row">
                  <div className="col-6">
                    <div className="font-weight-bold">Opening Time</div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="openingTime"
                      aria-describedby="basic-addon1"
                      defaultValue={
                        fetchData &&
                        fetchData.data &&
                        fetchData.data.parking_openingTime
                      }
                    />
                  </div>
                  <div className="col-6">
                    <div className="font-weight-bold">Closing Time</div>

                    <input
                      type="text"
                      className="form-control"
                      aria-label="closingTime"
                      aria-describedby="basic-addon1"
                      defaultValue={
                        fetchData &&
                        fetchData.data &&
                        fetchData.data.parking_closingTime
                      }
                    />
                  </div>
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="col-12">
                  <button
                    type="button"
                    style={{ width: "100%" }}
                    className="btn btn-primary btn-lg btn-block mt-2"
                    onClick={() =>
                      updateParkingData({
                        parking_name: document.querySelector(
                          '[aria-label="Name"]'
                        ).value,
                        parking_email: document.querySelector(
                          '[aria-label="E-mail"]'
                        ).value,
                        parking_contact: document.querySelector(
                          '[aria-label="Contact"]'
                        ).value,
                        parking_status: document.querySelector(
                          '[aria-label="Status"]'
                        ).value,
                        parking_twowheel_capacity: document.querySelector(
                          '[aria-label="twowheel_capacity"]'
                        ).value,
                        parking_fourwheel_capacity: document.querySelector(
                          '[aria-label="fourwheel_capacity"]'
                        ).value,
                        parking_price: document.querySelector(
                          '[aria-label="parking_price"]'
                        ).value,
                        parking_openingTime: document.querySelector(
                          '[aria-label="openingTime"]'
                        ).value,
                        parking_closingTime: document.querySelector(
                          '[aria-label="closingTime"]'
                        ).value,
                      })
                    }
                  >
                    Update
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : isFetchLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Error: {fetchError.message}</div>
      )}
    </>
  );
};

export default editProfile;
