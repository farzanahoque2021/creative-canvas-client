import usePayment from "../../../hooks/usePayment";


const PaymentHistory = () => {
    const [payment] = usePayment();
    return (
        <div className="w-full h-full p-6">
            <h2>Payment History</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Amount Paid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((row, index) => <tr key={row._id}>
                            <th>{index + 1}</th>
                            <td>{row.enrolledClass}</td>
                            <td>{row.email}</td>
                            <td>{row.transactionId}</td>
                            <td>{row.date}</td>
                            <td>${row.price}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;