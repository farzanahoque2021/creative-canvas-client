import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/background.jpg'
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

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

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('');
                setSuccess('User account has been created successfully');
                updateUserProfile(name, photo)
                    .then(() => {
                        const saveUser = { name: name, email: email }
                        fetch('https://creative-canvas-server-farzanahoque2021.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    form.reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => {
                        setError(error.message)
                    })
            })

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-slate-800 opacity-80">
                    <div className="card-body">
                        <h1 className="text-3xl text-center text-white font-bold">Register</h1>
                        {/* Form Code */}
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">PhotoURL</span>
                                </label>
                                <input type="url" placeholder="photourl" name="photourl" className="input input-bordered" required />

                            </div>
                            <p className='mb-4 text-red-400'>{error}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-accent" type="submit" value="Register"></input>
                            </div>
                        </form>
                        <p className='my-2 mx-auto text-center text-white' >Already have an account in Creative Canvas? <Link className='text-sky-400 font-semibold' to="/login">Login</Link></p>
                        <p className='ml-8 text-green-400'>{success}</p>
                        <p className="text-white mx-auto">OR, Register With Google</p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;