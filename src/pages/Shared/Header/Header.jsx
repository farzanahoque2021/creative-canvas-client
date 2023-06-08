
import { Link } from 'react-router-dom';
import img from '../../../assets/images/canvas-logo.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100 px-2 m-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link>Instructors</Link></li>
                        <li><Link>Classes</Link></li>
                        <li><Link>Dashboard</Link></li>
                    </ul>
                </div>
                <img className='w-40 h-20' src={img} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-base text-sky-500'><Link to="/">Home</Link></li>
                    <li className='text-base text-orange-400 '><Link>Instructors</Link></li>
                    <li className='text-base text-green-500'><Link>Classes</Link></li>
                    <li className='text-base  text-yellow-500'><Link>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg" />
                    </div>
                </label>
                <Link to="/login"><button className="btn btn-accent">Login</button></Link>
            </div>
        </div>

    );
};

export default Header;