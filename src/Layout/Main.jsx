import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-16">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-260px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;