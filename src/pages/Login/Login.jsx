import { useState } from "react";
import { HiOutlineMail, HiEye, HiEyeOff } from 'react-icons/hi'
import { Link } from "react-router-dom";


const Login = () => {
    const [show, setShow] = useState(false);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    {/* <img className='rounded-lg' src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <div className="flex relative">
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                <span className="absolute right-1 translate-y-1/2 text-xl"> <HiOutlineMail /></span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                                <p onClick={() => setShow(!show)}><small>
                                    {show ? <span className="cursor-pointer text-xl absolute right-1 translate-y-1/2"><HiEyeOff /></span> : <span className="text-xl cursor-pointer absolute right-1 translate-y-1/2"><HiEye /></span>}</small></p>
                            </div>

                        </div>
                        {/* <p className='mb-4 text-red-600'>{error}</p> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center' >New to Creative Canvas? <Link className='text-sky-400 font-semibold' to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;