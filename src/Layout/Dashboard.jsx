import { Link, Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { FaChalkboardTeacher, FaHome } from 'react-icons/fa';
import { RiBookMarkFill } from 'react-icons/ri'
import { MdOutlinePayment } from 'react-icons/md'


const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side rounded-xl">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        <li><Link><FaHome />User Home</Link></li>
                        <li><Link><FaChalkboardTeacher />Selected Classes</Link></li>
                        <li><Link><RiBookMarkFill />Enrolled Classes</Link></li>
                        <li><Link><MdOutlinePayment />Payment History</Link></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;