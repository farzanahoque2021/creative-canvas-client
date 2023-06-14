import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

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
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('https://creative-canvas-server-farzanahoque2021.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
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