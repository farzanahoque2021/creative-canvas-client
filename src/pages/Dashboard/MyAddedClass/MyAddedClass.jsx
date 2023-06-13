import useAdd from '../../../hooks/useAdd'


const MyAddedClass = () => {
    const [added] = useAdd();


    return (
        <div className='w-full h-full p-6'>
            <h2 className='text-center text-2xl font-semibold'>Added Classes</h2>
            <div className="w-full h-full p-6">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Class Name</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                added.map((row, index) => <tr key={row._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td>
                                        {row.instructor}
                                    </td>
                                    <td>{row.instructorEmail}</td>
                                    <td>{row.seat}</td>
                                    <td>${row.price}</td>
                                    <td>{row.status}</td>

                                    <td><button className="btn btn-xs btn-outline btn-info">Update</button></td>
                                    <td>{row.feedback ? row.feedback : "No Feedback"}</td>
                                </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAddedClass;