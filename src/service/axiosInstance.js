import axios from "axios";

const server = "https://cattlecare-api.herokuapp.com";
const local = "https://9d1d-101-50-108-2.ngrok.io";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? server : local,
});

export default axiosInstance;

export { server, local };
