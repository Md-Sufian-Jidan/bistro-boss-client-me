import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import UpdateMenuItems from "./UpdateMenuItem";
import { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    // get all menu data from db 
    const { data: menus = [], refetch } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/menu');
            return data;
        },
    });

    // update modal 
    const [isOpen, setIsOpen] = useState(false);
    const [singleMenu, setSingleMenu] = useState(null);

    // update a menu 
    const handleUpdate = (food) => {
        // console.log('update');
        setIsOpen(true);
        setSingleMenu(food);
    };


    // delete a menu 
    const handleDeleteMenu = (food) => {
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
                axiosSecure.delete(`/menu/${food._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${food.name} deleted successfully.`,
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }
        });
    }

    return (
        <div>
            {/* <h2>manage items</h2> */}
            <SectionTitle subHeading="title" heading="Manage Items" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* making dynamic rows */}
                        {
                            menus?.map((menu, idx) =>
                                <tr key={menu._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={menu?.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {menu?.name}
                                    </td>
                                    <td>{menu?.price}</td>
                                    <th>
                                        <button onClick={() => handleUpdate(menu)} className="btn btn-ghost"><FaEdit size={16} /></button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteMenu(menu)} className="btn btn-ghost text-red-500">
                                            <FaTrashAlt size={16} />
                                        </button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
                {/* update manage menu item */}
                {singleMenu && <UpdateMenuItems isOpen={isOpen} setIsEditModalOpen={setIsOpen} food={singleMenu}
                    setSingleMenu={setSingleMenu} />}
            </div>
        </div>
    );
};

export default ManageItems;