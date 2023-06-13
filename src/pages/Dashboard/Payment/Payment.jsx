import { useLoaderData } from "react-router-dom";





const Payment = () => {
    const info = useLoaderData();
    console.log(info)
    const { price } = info;

    return (
        <div>
            <h2>Payment Page</h2>
            <p>Price:${price}</p>

        </div>
    );
};

export default Payment;