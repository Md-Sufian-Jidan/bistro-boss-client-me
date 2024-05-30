import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';

//todo: add publish key
const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Eat To Eat" />
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>

        </div>
    );
};

export default Payment;