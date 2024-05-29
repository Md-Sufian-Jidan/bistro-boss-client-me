import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user/admin/${user?.email}`)
            return data.isAdmin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;