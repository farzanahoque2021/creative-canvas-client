import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const ClassCard = ({ all }) => {
    const { user } = useContext(AuthContext)
    const { image, _id, name, instructor, seat, price } = all;
    // card bg-base-100 shadow-xl h-[500px]
    return (
        <div>
            <div className={seat ? "card bg-base-100 shadow-lg h-[500px]" : "card bg-red-300 shadow-lg h-[500px]"}>
                <figure><img src={image} alt="all classes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available Seat: {seat}</p>
                    <p>Price: ${price}</p>
                    <button className="btn btn-accent w-1/3 mx-auto" disabled={user && seat ? false : true}>Select</button>

                </div>

            </div>
        </div>
    );
};

export default ClassCard;