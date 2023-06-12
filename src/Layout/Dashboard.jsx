import { Link, Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { RiBookMarkFill } from 'react-icons/ri'
import { MdOutlinePayment } from 'react-icons/md'
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    // const isAdmin = false;
    // const isInstructor = false;
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open dashboard</label>

                </div>
                <div className="drawer-side rounded-xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-sky-100 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link to="/dashboard/manageclass"><FaChalkboardTeacher />Manage Classes</Link></li>
                                <li><Link to="/dashboard/allusers"><FaUsers />Manage Users</Link></li></> : isInstructor ? <>
                                    <li><Link><FaChalkboardTeacher />Add a Class</Link></li>
                                    <li><Link><RiBookMarkFill />My Classes</Link></li></> : <>
                                <li><Link to="/dashboard/mycart"><FaChalkboardTeacher />Selected Classes<span className="badge badge-accent">+{cart?.length || 0}</span></Link>
                                </li>
                                <li><Link><RiBookMarkFill />Enrolled Classes</Link></li>
                                <li><Link><MdOutlinePayment />Payment History</Link></li></>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;