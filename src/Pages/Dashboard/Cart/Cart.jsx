import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const axiosSecure = useAxiosSecure();
    const [carts, refetch] = useCart();
    const totalPrice = carts.reduce((acc, item) => (acc + item.price), 0)
    // console.log(totalPrice);

    // handle delete cart from db
    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cart is deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
            }
        });
    };
    return (
        <div>
            <div className="flex justify-around items-center">
                <h2 className="text-4xl">my cart</h2>
                <p className="text-4xl">Total Price : ${totalPrice}</p>
                <button className="btn btn-outline bg-[#f1e07c]">Pay</button>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts?.map((item, idx) => (
                                <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item?.image} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item?.name}
                                    </td>
                                    <td>{item?.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-red-500">
                                            <FaTrashAlt size={16} />
                                        </button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;