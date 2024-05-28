import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    // get all the users dat from db
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return data;
        }
    });

    // making a user admin 
    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-start',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        // console.log(user);
    };

    // delete a user from db
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your use is deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div>
                <h2 className="text-5xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto my-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* dynamic table row 1 */}
                        {
                            users.map((item, idx) => (
                                <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item?.role === 'admin' ? <p className="font-bold">Admin</p> :
                                            <button onClick={() => handleMakeAdmin(item)} className="btn btn-circle hover:bg-orange-500 bg-orange-200">
                                                <FaUser size={16} />
                                            </button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(item._id)} className="btn btn-ghost text-red-500">
                                            <FaTrashAlt size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;