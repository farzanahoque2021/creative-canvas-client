import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext)

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const instructorEmail = form.email.value;
        const price = form.price.value;
        const image = form.photo.value;
        const seat = form.seat.value;
        const instructor = form.instructor.value;

        const newClass = { name, image, instructor, instructorEmail, seat, price, studentNumber: 0, status: 'pending' }
        console.log(newClass)

        fetch('http://localhost:5000/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'CLass Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="w-full h-full p-12">
            <h2 className="text-center font-bold text-3xl mb-6">Add Class</h2>
            <div className="border-2 rounded-lg mx-auto">
                <form onSubmit={handleAdd}>
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Class PhotoURL</span>
                        </label>
                        <input type="photoURL" placeholder="Class Image" name="photo" className="input input-bordered" required />
                    </div>

                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Instructor" name="instructor" defaultValue={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="email" placeholder="Instructor Email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Available Seat</span>
                        </label>
                        <input type="number" placeholder="Seat" name="seat" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/3 mx-auto my-6">
                        <input className="btn btn-accent" type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;