import { Helmet } from "react-helmet";
import { FaAddressBook, FaCalendarAlt, FaGetPocket, FaHome, FaList, FaSearchPlus, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [carts] = useCart();

    //TODO: get is admin value from data base
    const isAdmin = true;

    return (
        <>
            <Helmet>
                <title>Jj Restaurant || Dashboard</title>
            </Helmet>
            <div className="flex mx-auto">
                {/* dashboard sidebar */}
                <div className="w-64 min-h-screen bg-[#521452]/40 p-5 space-y-2">
                    {isAdmin ?
                        <ul className="menu">
                            <li>
                                <NavLink  to="/dashboard/admin-home"><FaShoppingCart size={20} />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/add-items"><FaUtensils size={20} />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manage-items"><FaList size={20} />Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? "bg-blue-500/50" : ""} to="/dashboard/all-users"><FaAddressBook size={20} />All Users</NavLink>
                            </li>
                            {/* shared navLinks */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/"><FaHome size={20} />Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu"><FaSearchPlus size={20} />Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/salad"><FaGetPocket size={20} />order</NavLink>
                            </li>
                        </ul> : <ul className="menu">
                            <li>
                                <NavLink to="/dashboard/user-home"><FaHome size={20} />User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart"><FaShoppingCart size={20} />My Cart ({carts?.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><FaCalendarAlt size={20} />Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviews"><FaAddressBook size={20} />Reviews</NavLink>
                            </li>
                            {/* shared navLinks */}
                            <div className="divider"></div>
                            <li>
                                <NavLink to="/"><FaHome size={20} />Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu"><FaSearchPlus size={20} />Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/salad"><FaGetPocket size={20} />order</NavLink>
                            </li>
                        </ul>}
                </div>

                <div className="flex-1 p-8">
                    {/* dashboard content */}
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default Dashboard;