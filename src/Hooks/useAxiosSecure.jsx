import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`
});

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request stop by interceptors', token);
        // console.log('axios interceptor', token);
        
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    });

    // interceptor 401 && 403
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logout();
            navigate('/login');
        }
        console.log('status code error in the interceptor', status);
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;