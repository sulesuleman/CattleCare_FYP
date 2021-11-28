import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cattlecare-api.herokuapp.com",
});

export default axiosInstance;
