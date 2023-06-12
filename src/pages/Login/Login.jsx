import { useState } from "react";
import { HiOutlineMail, HiEye, HiEyeOff } from 'react-icons/hi'
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/background4.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    // const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('');
                form.reset();
                Swal.fire({
                    title: 'Success!',
                    text: 'User Logged In Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-slate-800 opacity-80">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold text-white">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <div className="flex relative">
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                <span className="absolute right-1 translate-y-1/2 text-xl"> <HiOutlineMail /></span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                <p onClick={() => setShow(!show)}><small>
                                    {show ? <span className="cursor-pointer text-xl absolute right-1 translate-y-1/2"><HiEyeOff /></span> : <span className="text-xl cursor-pointer absolute right-1 translate-y-1/2"><HiEye /></span>}</small></p>
                            </div>

                        </div>
                        <p className='mb-4 text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center text-white' >New to Creative Canvas? <Link className='text-sky-400 font-semibold' to="/register">Register</Link></p>

                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;