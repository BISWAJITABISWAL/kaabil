import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const getJobs = async () => {
  var config = {
    method: "get",
    url: BASE_URL + "/jobs",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  try {
    const resp = await axios(config);
    if (resp.status === 200) {
      localStorage.setItem("token", resp.data.result.token);
      return {
        status: "SUCCESS",
        message: "Jobs Recieved",
        data: resp.data,
      };
    } else {
      return {
        status: "ERROR",
        message: "Invalid email or password.",
      };
    }
  } catch (error) {
    var message = JSON.parse(error.request.response).message;

    return {
      status: "ERROR",
      message: message,
    };
  }
};

export const addJob = async (allData) => {
  var data = JSON.stringify(allData);

  var config = {
    method: "post",
    url: BASE_URL + "/job",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: data,
  };

  try {
    const resp = await axios(config);
    if (resp.status === 201) {
      return {
        status: "SUCCESS",
        message: "Jobs Created",
        data: resp.data,
      };
    } else {
      return {
        status: "ERROR",
        message: "Unable to create job.",
      };
    }
  } catch (error) {
    var message = JSON.parse(error.request.response).message;

    return {
      status: "ERROR",
      message: message,
    };
  }
};
