import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);