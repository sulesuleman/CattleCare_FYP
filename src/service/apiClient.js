// import axios from "axios";
import axiosInstance from "./axiosInstance";

const baseUrl = process.env.BASE_URL; // global

console.log(process.env.BASE_URL);


// get request
const getRequest = async (endpoint) => {
  try {
    let response = await axiosInstance.get(`/${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// post request

const postRequest = async (endpoint, body) => {
  try {
    let response = await axiosInstance.post(`/${endpoint}`, body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest };
