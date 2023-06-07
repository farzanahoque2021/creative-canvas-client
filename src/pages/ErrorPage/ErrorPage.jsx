import { Link } from 'react-router-dom';
import img from '../../assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div className='text-center my-6'>
            <img src={img} className='w-1/2 mx-auto' alt="error Page" />
            <Link to='/'><button className='btn btn-accent'>Go Back To HomePage</button></Link>
        </div>
    );
};

export default ErrorPage;