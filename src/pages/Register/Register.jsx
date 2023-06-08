import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/images/background.jpg'
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext);
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
                setError('');
                setSuccess('User account has been created successfully');
                navigate('/');
                updateUserData(loggedUser, name, photo)
                form.reset();
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log('Username updated');
            })
            .catch(error => {
                setError(error.message)
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
                        <p className='my-4 text-center text-white' >Already have an account in Creative Canvas? <Link className='text-sky-400 font-semibold' to="/login">Login</Link></p>
                        <p className='mb-4 ml-8 text-green-400'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;