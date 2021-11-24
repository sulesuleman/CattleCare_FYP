import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ?
        'https://cattlecare-admin.herokuapp.com' : 'http://localhost:80'
});

export default axiosInstance;