import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Login from "../Pages/Shared/Login/Login";
import Shop from "../Pages/Home/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UserHome from "../Pages/Dashboard/NormalUser/UserHome/UserHome";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
// import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/shop/:category',
                element: <Shop />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        children: [
            {
                // index: true,
                path: 'cart',
                element: <ProtectedRoute><Cart /></ProtectedRoute>
            },
            // normal user route
            {
                path: '/dashboard/user-home',
                element: <ProtectedRoute><UserHome /></ProtectedRoute>
            },
            {
                path:'/dashboard/payment',
                element: <ProtectedRoute><Payment /></ProtectedRoute>
            },


            // admin routes
            {
                path: 'all-users',
                element: <ProtectedRoute><AdminRoute><AllUsers /></AdminRoute></ProtectedRoute>
            },
            {
                path: 'add-items',
                element: <ProtectedRoute><AdminRoute><AddItems /></AdminRoute></ProtectedRoute>
            },
            {
                path: 'admin-home',
                element: <ProtectedRoute><AdminRoute><AdminHome /></AdminRoute></ProtectedRoute>
            },
            {
                path: 'manage-items',
                element: <ProtectedRoute><AdminRoute><ManageItems /></AdminRoute></ProtectedRoute>
            },
        ]
    }
])

export default router;