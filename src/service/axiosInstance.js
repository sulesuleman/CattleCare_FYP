import axios from "axios";

const server = "https://cattlecare-api.herokuapp.com";
const local = "https://869e-101-50-108-2.ngrok.io";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? server : 'http://localhost:80',
});

export default axiosInstance;
