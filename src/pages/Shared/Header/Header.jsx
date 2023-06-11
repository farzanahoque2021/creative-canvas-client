
import { Link } from 'react-router-dom';
import img from '../../../assets/images/canvas-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaChalkboardTeacher } from 'react-icons/fa'
import useCart from '../../../hooks/useCart';
const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message)
            })
    }
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
                        {
                            user ? <> <li className='text-base  text-yellow-500'><Link>Dashboard</Link></li></> : ""
                        }

                    </ul>
                </div>
                <img className='w-40 h-20' src={img} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-base text-sky-500'><Link to="/">Home</Link></li>
                    <li className='text-base text-orange-400 '><Link to="/instructors">Instructors</Link></li>
                    <li className='text-base text-green-500'><Link to="/classes">Classes</Link></li>
                    {
                        user ? <> <li className='text-base  text-yellow-500'><Link to="/dashboard">Dashboard</Link></li></> : ""
                    }
                    <li><Link to="/classes"><button className='btn gap-2'> <FaChalkboardTeacher /><div className='badge badge-accent'>+{cart?.length || 0}</div>
                    </button></Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex'><label className="btn btn-ghost btn-circle avatar tooltip tooltip-left tooltip-success mr-2" data-tip={user.displayName}>
                        <div className="w-12 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </label><button onClick={handleLogOut} className="btn btn-accent">Log out</button></div> : <Link to="/login"><button className="btn btn-accent">Login</button></Link>
                }
            </div>
        </div>

    );
};

export default Header;