import axios from "axios";

const server = "https://cattlecare-api.herokuapp.com";
const local = "localhost:80";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? server : local,
});

export default axiosInstance;

export { server, local };
