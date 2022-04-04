import { toast } from "react-toastify";

const { default: axios } = require("axios");

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const register = async (name, phone, email, password) => {
  var data = JSON.stringify({
    name,
    phone_number: phone,
    email,
    password,
  });

  var config = {
    method: "post",
    url: BASE_URL + "/user/signup",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resp = await axios(config);

    if (resp.status === 201) {
      localStorage.setItem("token", resp.data.result.token);
      return {
        status: "SUCCESS",
        message: "Registered successfully",
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

export const verifyEmail = async (email) => {
  var data = JSON.stringify({
    email,
  });

  var config = {
    method: "get",
    url: BASE_URL + "/user/validate",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resp = await axios(config);
    if (resp.status === 200) {
      localStorage.setItem("token", resp.data.result.token);
      toast("Email sent to " + email + " Please verify to continue.", {
        type: "success",
      });
    } else {
      toast("Error while send verification email.", {
        type: "error",
      });
    }
  } catch (error) {
    var message = JSON.parse(error.request.response).message;
    toast(message, {
      type: "error",
    });
  }
};

export const login = async (email, password) => {
  var data = JSON.stringify({
    email,
    password,
  });

  var config = {
    method: "post",
    url: BASE_URL + "/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const resp = await axios(config);
    if (resp.status === 200) {
      localStorage.setItem("token", resp.data.result.token);
      return {
        status: "SUCCESS",
        message: "LoggedIn successfully",
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

export const logout = () => {};
