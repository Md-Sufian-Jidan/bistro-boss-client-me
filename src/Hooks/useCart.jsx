import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import axios from "axios";

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { data: carts = [], refetch } = useQuery({
        queryKey: ["carts"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts`);
            // const res = axios.get(`${import.meta.env.VITE_API_URL}/carts`)
            console.log(res.data);
            return res.data;
        }
    })
    return [carts, refetch];
};

export default useCart;