import axios from "axios";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const axiosPublic = axios.create({
    baseURL: baseUrl
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;