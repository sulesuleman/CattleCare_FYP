import axios from "axios";

const server = "https://cattlecare-api.herokuapp.com";
const local = "https://d5fd-101-50-108-2.ngrok.io";

const axiosInstance = axios.create({
  baseURL: server,
});

export default axiosInstance;
