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
        element: <Dashboard />,
        children: [
            {
                // index: true,
                path: 'cart',
                element: <Cart />
            },


            // admin routes
            {
                path: 'all-users',
                element: <AllUsers />
            }
        ]
    }
])

export default router;