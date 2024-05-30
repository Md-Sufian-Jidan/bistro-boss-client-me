import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);
    const from = location?.pathname;

    if (loading) return <p className="flex justify-center items-center screen-h-full mx-auto text-5xl">Wait page is loading...</p>

    if (user) return children;

    return <Navigate to="/" state={{ from }} replace ></Navigate>

};
ProtectedRoute.propTypes = {
    children: PropTypes.object
}

export default ProtectedRoute;