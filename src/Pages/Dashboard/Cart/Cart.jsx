import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
    const [carts] = useCart();
    const totalPrice = carts.reduce((acc, item) => (acc + item.price), 0)
    // console.log(totalPrice);
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
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            carts?.map((item) => (
                                <tr key={item._id}>
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
                                        <button className="btn btn-ghost">
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