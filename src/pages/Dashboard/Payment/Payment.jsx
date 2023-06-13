import { useLocation } from "react-router-dom";




const Payment = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state)

    return (
        <div>
            <h2>Payment Page</h2>
            <p>Price:${state}</p>

        </div>
    );
};

export default Payment;