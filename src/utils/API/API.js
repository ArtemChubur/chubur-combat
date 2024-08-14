import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://chubur-combat-back.vercel.app/api'
})

export {axiosInstance}