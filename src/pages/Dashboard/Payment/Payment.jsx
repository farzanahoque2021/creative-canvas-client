import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const info = useLoaderData();
    const { price } = info;


    return (
        <div className="w-1/2">
            <h2 className="text-2xl font-bold">Please Proceed</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm info={info} price={price}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;