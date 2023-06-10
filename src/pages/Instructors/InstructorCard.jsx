
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
const InstructorCard = ({ instructor }) => {
    const { name, image, email } = instructor;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-[500px]">
                <figure><img src={image} alt="instructor" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <h2 className="mx-auto flex items-center"><span className='text-lg px-2'><MdEmail /></span>  {email}</h2>
                    <div className='flex justify-center items-center gap-5 mt-2 text-lg cursor-pointer'>
                        <BsFacebook />
                        <BsInstagram />
                        <BsTwitter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;