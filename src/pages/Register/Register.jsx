import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photourl.value;

        console.log(name, email, password, confirm, photo)

        // validating the password
        // checking if the password has atleast one Uppercase
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase in your password')
            return;
        }
        // checking if the password has atleast one special character.
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Please add atleast one special character in your password')
            return;
        }
        // checking if the password have 6 characters
        else if (password.length < 6) {
            setError('Please add atleast six characters in your password')
            return;
        }
        // checking if the confirm password matches with the password
        else if (password !== confirm) {
            setError('Your password did not match')
            return;
        }

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">

                    {/* <img src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        {/* Form Code */}
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="url" placeholder="photourl" name="photourl" className="input input-bordered" required />

                            </div>
                            <p className='mb-4 text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-accent" type="submit" value="Register"></input>
                            </div>
                        </form>
                        <p className='my-4 text-center' >Already have an account in Creative Canvas? <Link className='text-sky-400 font-semibold' to="/login">Login</Link></p>
                        <p className='mb-4 ml-8 text-green-600'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;