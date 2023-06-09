import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const SocialLogin = () => {
    const { signInGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    title: 'Success!',
                    text: 'Signed In With Google Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                navigate(from, { replace: true });
            })
    }
    return (
        <div className="mx-auto mb-4">
            <button onClick={handleGoogleSignIn} className="btn btn-circle">
                <span className='text-xl'><FcGoogle /></span>
            </button>
        </div>
    );
};

export default SocialLogin;