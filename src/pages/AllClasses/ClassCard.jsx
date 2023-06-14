import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ClassCard = ({ all }) => {
    const { user } = useContext(AuthContext)
    const { image, _id, name, instructor, seat, price } = all;
    const [, refetch] = useCart();
    const [clicked, setClicked] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = all => {
        console.log(all)
        if (user && user.email) {
            const cartItem = { classItemId: _id, name, image, price, email: user.email }
            fetch('https://creative-canvas-server-farzanahoque2021.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setClicked(false)
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className={seat ? "card bg-base-100 shadow-xl h-[500px]" : "card bg-red-300 shadow-xl h-[500px]"}>
                <figure><img src={image} alt="all classes" /></figure>
                <div className="card-body">
                    <h2 className="card-title mx-auto">{name}</h2>
                    <p>Instructor Name: {instructor}</p>
                    <p>Available Seat: {seat}</p>
                    <p>Price: ${price}</p>
                    <button onClick={() => handleAddToCart(all)} className="btn btn-outline btn-accent w-1/3 mx-auto" disabled={!seat || !clicked}>Select</button>

                </div>

            </div>
        </div>
    );
};

export default ClassCard;