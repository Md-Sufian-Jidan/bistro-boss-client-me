import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet";

const Main = () => {
    return (
        <>
        <Helmet>
            <title>Jj Restaurant | Home</title>
        </Helmet>
            <div className="max-w-7xl mx-auto">
                <div className="h-20">
                    <Navbar />
                </div>
                <div className="min-h-[calc(100vh-260px)]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Main;