import axios from "axios";

let baseUrl = process.env.BASE_URL; // global

// get request
const getRequest = async (endpoint) => {
  try {
    let response = await axios.get(`${baseUrl}/${endpoint}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// post request

const postRequest = async (endpoint, body) => {
  try {
    let response = await axios.post(`${baseUrl}/${endpoint}`, body);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getRequest, postRequest };
