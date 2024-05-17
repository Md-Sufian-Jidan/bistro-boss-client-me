import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 fixed max-w-7xl mx-auto z-50">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Foode</a>
            </div>
            <div className="flex-none">
                <NavLink className="btn mr-2">Home</NavLink>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink>Home</NavLink></li>
                    </ul>
                </div>
                <button className="btn btn-outline border-y-4 hover:scale-110 ml-2">Logout</button>
            </div>
        </div>
    );
};

export default Navbar;