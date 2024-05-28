import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // const from = location.pathname;
    if (loading) return <p className="my-20 mx-auto text-5xl">Wait page is loading...</p>

    if (user) return children;

    return <Navigate to="/login" state={{from: location}} replace={true} ></Navigate>

};
ProtectedRoute.propTypes = {
    children: PropTypes.object
}

export default ProtectedRoute;