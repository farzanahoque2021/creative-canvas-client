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
import PrivateRoute from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyAddedClass from "../pages/Dashboard/MyAddedClass/MyAddedClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import Feedback from "../pages/Dashboard/Feedback.jsx/Feedback";
import Enrolled from "../pages/Dashboard/Enrolled/Enrolled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";


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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://creative-canvas-server-farzanahoque2021.vercel.app/carts/${params.id}`)
            },
            {
                path: 'enrolled',
                element: <Enrolled></Enrolled>
            },
            {
                path: 'history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'manageclass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'myclass',
                element: <InstructorRoute><MyAddedClass></MyAddedClass></InstructorRoute>
            },
            {
                path: 'feedback',
                element: <AdminRoute><Feedback></Feedback></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);