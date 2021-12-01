import axios from "axios";

const server = "https://cattlecare-api.herokuapp.com";
const local = "https://869e-101-50-108-2.ngrok.io";

const axiosInstance = axios.create({
  baseURL: local,
});

export default axiosInstance;
