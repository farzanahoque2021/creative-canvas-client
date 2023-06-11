import useCart from "../../../hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    return (
        <div>
            <h2>Selected Classes</h2>
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
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((row, index) => <tr key={row._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="font-bold">{row.name}</p>

                                </td>

                                <td><button className="btn btn-outline btn-accent btn-xs">Pay</button></td>
                                <th>
                                    <button className="btn btn-outline btn-accent btn-xs">Delete</button>
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