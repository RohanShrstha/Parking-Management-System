import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useUpdate from "../customHooks/useUpdate";
import Swal from "sweetalert2";

const editPassword = () => {
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
        title: "Password Changed Successfully",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        setUpdateSuccess(false);
        window.location.href = "/admin/profile";
      });
    }
  }, [updateSuccess]);

  const updateParkingData = (values) => {
    fetchData.data.parking_password = values.parking_password;
    handleUpdate(fetchData.data);
  };

  return (
    <>
      {parkingData ? (
        <div style={{ marginLeft: "14.5rem" }}>
          {/* Render profile data here */}
          <div className="pl-4 pt-4 pb-4">
            <h1>Change Password</h1>
          </div>

          <div className="pl-3 pb-3">
            <ul className="list-group " style={{ width: "200%" }}>
              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Current Password</div>
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    defaultValue={
                      fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_password
                    }
                  />
                </div>
              </li>
              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Change Password</div>
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </li>
              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Verify </div>
                  <input
                    type="password"
                    className="form-control"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                  />
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
                        parking_password: document.querySelector(
                          '[aria-label="Password"]'
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

export default editPassword;
