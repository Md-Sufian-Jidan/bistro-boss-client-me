import { FaAddressBook, FaCalendarAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaFirstOrder } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex mx-auto">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-[#521452]/40 p-5">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/user-home"><FaHome size={20} />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-cart" end><FaShoppingCart size={20} /> My Cart</NavLink>
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
                        <NavLink to="/order/salad"><FaFirstOrder size={20} />order</NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-1 p-8">
                {/* dashboard content */}
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;