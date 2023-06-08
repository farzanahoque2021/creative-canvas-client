import { useState } from "react";
import { HiOutlineMail, HiEye, HiEyeOff } from 'react-icons/hi'


const Login = () => {
    const [show, setShow] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <div className="flex relative">
                                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                                <span className="absolute right-1 translate-y-1/2 text-xl"> <HiOutlineMail /></span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex relative">
                                <input type={show ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" />
                                <p onClick={() => setShow(!show)}><small>
                                    {show ? <span className="cursor-pointer text-xl absolute right-1 translate-y-1/2"><HiEyeOff /></span> : <span className="text-xl cursor-pointer absolute right-1 translate-y-1/2"><HiEye /></span>}</small></p>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;