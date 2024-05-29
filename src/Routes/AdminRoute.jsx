import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types'

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) return <span className="loading loading-bars w-20 flex justify-center text-success min-h-screen mx-auto"></span>;

    if (user && isAdmin) return children;

    return <Navigate to={'/login'} state={{ from: location }} replace />
};
AdminRoute.propTypes = {
    children: PropTypes.object
}
export default AdminRoute;