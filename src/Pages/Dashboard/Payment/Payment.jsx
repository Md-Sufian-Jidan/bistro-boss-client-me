import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import CheckOutFrom from "./CheckOutFrom";

//todo: add publish key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_GATEWAY);

const Payment = () => {

    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Eat To pay" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;