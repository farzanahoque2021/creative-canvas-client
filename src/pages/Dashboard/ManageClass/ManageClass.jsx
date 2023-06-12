import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });

    const handleDeny = (id) => {
        fetch(`http://localhost:5000/class/deny/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/class/approve/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
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
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClass.map((row, index) => <tr key={row._id}>
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
                                <td><button onClick={() => handleApprove(row._id)} className="btn btn-xs btn-outline btn-accent">Approve</button></td>
                                <td><button onClick={() => handleDeny(row._id)} className="btn btn-xs btn-outline btn-error">Deny</button></td>
                                <td><button className="btn btn-xs btn-outline btn-info">Send Feedback</button></td>
                            </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClass;