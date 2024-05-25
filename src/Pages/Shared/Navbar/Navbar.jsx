import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import profile from '../../../assets/others/profile.png'
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const [carts] = useCart();
    console.log(carts);
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('User logout successfully');
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/">Home</NavLink>
        {/* TODO: CREATE THIS ROUTE AND ADD IN HOME PAGE */}
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/dashboard">Dashboard</NavLink>
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/menu">Our Menu</NavLink>
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/shop/salad">Our shop</NavLink>
        <NavLink className={({ isActive }) => isActive ? "p-3 border-0 border-b-2 border-b-pink-500 mr-2" : "p-3 mr-2"} to="/dashboard">
            <button className="flex items-center">
                <FaCartArrowDown size={20} />
                <div className="badge badge-secondary">+{carts?.length}</div>
            </button>
        </NavLink>
    </>

    return (
        <div className="navbar fixed bg-opacity-50 rounded-b-xl max-w-7xl z-50 mx-auto bg-purple-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Jj <br />Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={handleLogout} className="text-lg hover:cursor-pointer hover:underline text-red-400 mx-3">sign out</Link>
                        :
                        <Link to="/login" className="btn rounded-full bg-[#f0f5ac]">Login</Link>

                }
                {
                    user && <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-2">
                        <div className="w-16 rounded-full">
                            <img title={user?.displayName} alt="User Profile Pic" src={user ? user?.photoURL : profile} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;