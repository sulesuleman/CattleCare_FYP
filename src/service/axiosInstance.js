import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
        'https://cattlecare-api.herokuapp.com' : 'https://e16e-101-50-108-2.ngrok.io'
});

export default axiosInstance;