import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import axios from "axios";

const useCart = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: carts = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/carts?email=${user.email}`);
            // const res = axios.get(`${import.meta.env.VITE_API_URL}/carts`)
            // console.log(data);
            return data;
        }
    })
    return [carts, refetch];
};

export default useCart;