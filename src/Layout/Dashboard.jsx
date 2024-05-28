import { Helmet } from "react-helmet";
import { FaAddressBook, FaCalendarAlt, FaGetPocket, FaHome, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [carts] = useCart();
    return (
        <>
            <Helmet>
                <title>Jj Restaurant || Dashboard</title>
            </Helmet>
            <div className="flex mx-auto">
                {/* dashboard sidebar */}
                <div className="w-64 min-h-screen bg-[#521452]/40 p-5">
                    <ul className="menu">
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
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/"><FaHome size={20} />Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad"><FaGetPocket size={20} />order</NavLink>
                        </li>
                    </ul>
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