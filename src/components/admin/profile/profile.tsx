import { useEffect, useRef, useState } from "react";
import { Group, Stack, Text, Image, Progress, Button } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { createWorker } from "tesseract.js";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import useUpdate from "../customHooks/useUpdate";
import Swal from "sweetalert2";

const Profile = () => {
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
        title: "Data Updated",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setUpdateSuccess(false);
        window.location.reload();
      });
    }
  }, [updateSuccess]);

  const updateParkingData = (values) => {
    fetchData.data.parking_twowheel = values.parking_twowheel;
    fetchData.data.parking_fourwheel = values.parking_fourwheel;
    handleUpdate(fetchData.data);
  };

  const [twoWheelerImageData, setTwoWheelerImageData] = useState(null);
  const [fourWheelerImageData, setFourWheelerImageData] = useState(null);
  const [twoWheelerOcrResult, setTwoWheelerOcrResult] = useState("");
  const [fourWheelerOcrResult, setFourWheelerOcrResult] = useState("");

  const loadTwoWheelerFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setTwoWheelerImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  };

  const loadFourWheelerFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      setFourWheelerImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  };

  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("idle");

  const workerRef = useRef(null);
  useEffect(() => {
    workerRef.current = createWorker({
      logger: (message) => {
        if ("progress" in message) {
          setProgress(message.progress);
          setProgressLabel(message.progress === 1 ? "Done" : message.status);
        }
      },
    });
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, []);

  const handleExtractTwoWheeler = async (imageData) => {
    setProgress(0);
    setProgressLabel("starting");

    const worker = workerRef.current;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const response = await worker.recognize(imageData);
    setTwoWheelerOcrResult(response.data.text);
    console.log(response.data);
  };

  const handleExtractFourWheeler = async (imageData) => {
    setProgress(0);
    setProgressLabel("starting");

    const worker = workerRef.current;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const response = await worker.recognize(imageData);
    setFourWheelerOcrResult(response.data.text);
    console.log(response.data);
  };

  return (
    <>
      {parkingData ? (
        <div style={{ marginLeft: "14.5rem" }}>
          <div className="pl-4 pt-4 pb-4">
            <h1>
              Welcome,{" "}
              {fetchData && fetchData.data && fetchData.data.parking_name}
            </h1>
          </div>

          <div className="pl-3 pb-3">
            <ul className="list-group " style={{ width: "98%" }}>
              <li className="list-group-item list-group-item-action">
                <div>
                  <div className="font-weight-bold">Email</div>

                  {fetchData && fetchData.data && fetchData.data.parking_email}
                </div>
              </li>
              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Contact Number</div>

                  {fetchData &&
                    fetchData.data &&
                    fetchData.data.parking_contact}
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="row">
                  <div className="col-4">
                    <div className="font-weight-bold">Two Wheeler Capacity</div>

                    {fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_twowheel_capacity}
                  </div>
                  <div className="col-4">
                    <div className="font-weight-bold">
                      Four Wheeler Capacity
                    </div>

                    {fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_fourwheel_capacity}
                  </div>
                  <div className="col-4"></div>
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="row">
                  <div className="col-4">
                    <div className="font-weight-bold">Two Wheeler Parked</div>

                    {fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_twowheel}
                  </div>
                  <div className="col-4">
                    <div className="font-weight-bold">Four Wheeler Parked</div>

                    {fetchData &&
                      fetchData.data &&
                      fetchData.data.parking_fourwheel}
                  </div>
                  <div className="col-4"></div>
                </div>
              </li>

              <li className="list-group-item list-group-item-action">
                <div className="row">
                  <div className="col-4">
                    <div className="font-weight-bold">Two Wheeler Data</div>
                    <Group>
                      <Stack>
                        <Dropzone
                          onDrop={(files) => loadTwoWheelerFile(files[0])}
                          accept={IMAGE_MIME_TYPE}
                          multiple={false}
                        >
                          {() => (
                            <Text size="lg" inline>
                              Drag image here or click to select file
                            </Text>
                          )}
                        </Dropzone>

                        {twoWheelerImageData && (
                          <Image
                            src={twoWheelerImageData}
                            style={{ width: "100%" }}
                          />
                        )}

                        <Button
                          disabled={!twoWheelerImageData || !workerRef.current}
                          onClick={() =>
                            handleExtractTwoWheeler(twoWheelerImageData)
                          }
                        >
                          Extract Two Wheeler
                        </Button>
                        {/* <Text>{progressLabel.toUpperCase()}</Text> */}
                        <Progress value={progress * 100} />
                      </Stack>
                    </Group>
                    {twoWheelerOcrResult && (
                      <div className="input-group pt-2">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Two Wheeler Parked"
                          aria-describedby="basic-addon1"
                          value={twoWheelerOcrResult}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-4">
                    <div className="font-weight-bold">Four Wheeler Data</div>
                    <Group>
                      <Stack>
                        <Dropzone
                          onDrop={(files) => loadFourWheelerFile(files[0])}
                          accept={IMAGE_MIME_TYPE}
                          multiple={false}
                        >
                          {() => (
                            <Text size="lg" inline>
                              Drag image here or click to select file
                            </Text>
                          )}
                        </Dropzone>

                        {fourWheelerImageData && (
                          <Image
                            src={fourWheelerImageData}
                            style={{ width: "100%" }}
                          />
                        )}

                        <Button
                          disabled={!fourWheelerImageData || !workerRef.current}
                          onClick={() =>
                            handleExtractFourWheeler(fourWheelerImageData)
                          }
                        >
                          Extract Four Wheeler
                        </Button>
                        {/* <Text>{progressLabel.toUpperCase()}</Text> */}
                        <Progress value={progress * 100} />
                      </Stack>
                    </Group>
                    {fourWheelerOcrResult && (
                      <div className="input-group pt-2">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Four Wheeler Parked"
                          aria-describedby="basic-addon1"
                          value={fourWheelerOcrResult}
                        />
                      </div>
                    )}
                  </div>

                  <div className="col-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block mt-2"
                      disabled={!twoWheelerOcrResult || !fourWheelerOcrResult}
                      onClick={() =>
                        updateParkingData({
                          parking_twowheel: twoWheelerOcrResult,
                          parking_fourwheel: fourWheelerOcrResult,
                        })
                      }
                    >
                      Update
                    </button>
                  </div>
                </div>
              </li>

              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Parking Price</div>
                  Rs.{" "}
                  {fetchData && fetchData.data && fetchData.data.parking_price}
                </div>
              </li>

              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">Parking Status</div>

                  {fetchData && fetchData.data && fetchData.data.parking_status}
                </div>
              </li>

              <li className="list-group-item list-group-item-action ">
                <div>
                  <div className="font-weight-bold">
                    Parking Opening and Closing time
                  </div>
                  {fetchData &&
                    fetchData.data &&
                    fetchData.data.parking_openingTime}
                  AM -{" "}
                  {fetchData &&
                    fetchData.data &&
                    fetchData.data.parking_closingTime}
                  PM
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

export default Profile;
