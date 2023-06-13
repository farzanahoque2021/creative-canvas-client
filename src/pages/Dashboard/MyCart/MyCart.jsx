import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div className="w-full h-full p-6">
            <div>
                <h2 className="text-2xl font-bold">Total Classes:  {cart.length}</h2>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td>{index + 1}</td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="image" />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <p className="font-bold">{row.name}</p>

                                </td>
                                <td><p>${row.price}</p></td>

                                <td><Link to='/dashboard/payment' state={row.price}><button className="btn btn-outline btn-accent btn-xs">Pay</button></Link></td>
                                <th>
                                    <button onClick={() => handleDelete(row)} className="btn btn-outline btn-circle btn-error btn-sm"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;