// import axios from "axios";
import axiosInstance from "./axiosInstance";

// get request
const getRequest = async (endpoint, withJwt = true) => {
  let options = {
    method: "get",
    url: endpoint,
  };
  if (withJwt) {
    let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
    options = {
      ...options,
      headers: { Authorization: `bearer ${token}` },
    };
  }
  try {
    let response = await axiosInstance(options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// post request

const postRequest = async (endpoint, body, withJwt = true) => {
  try {
    let options = {
      url: `/${endpoint}`,
      data: body,
      method: "post",
    };
    if (withJwt) {
      let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
      options = {
        ...options,
        headers: { Authorization: `bearer ${token}` },
      };
    }
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};

const putRequest = async (endpoint, body, withJwt = true) => {
  try {
    let options = {
      url: `/${endpoint}`,
      data: body,
      method: "put",
    };
    if (withJwt) {
      let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
      options = {
        ...options,
        headers: { Authorization: `bearer ${token}` },
      };
    }
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};

// handles uploads

const postFormData = async (endpoint, body) => {
  let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
  let options = {
    method: "post",
    url: `/${endpoint}`,
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};

const putFormData = async (endpoint, body) => {
  let token = JSON.parse(localStorage.getItem("cattleCare"))?.user?.token;
  let options = {
    method: "put",
    url: `/${endpoint}`,
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `bearer ${token}`,
    },
  };
  try {
    return await axiosInstance(options);
  } catch (error) {
    console.error(error);
  }
};



export { getRequest, postRequest, postFormData, putRequest , putFormData };
