import usePayment from "../../../hooks/usePayment";


const Enrolled = () => {
    const [payment] = usePayment()
    console.log(payment)
    return (
        <div className="w-full h-full p-6">
            <h2>Enrolled classes</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((row, index) => <tr key={row._id}>
                            <th>{index + 1}</th>
                            <td>{row.enrolledClass}</td>
                            <td>{row.email}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrolled;