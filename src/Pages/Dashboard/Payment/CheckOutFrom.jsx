import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const CheckOutFrom = () => {
    const { user } = useAuth();
    const [error, setError] = useState();
    // client secret
    const [clientSecret, setClientSecret] = useState();
    // transaction id
    const [transactionId, setTransactionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [carts] = useCart();
    const totalPrice = carts.reduce((acc, item) => (acc + item?.price), 0)

    ////////////////
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data);
                    setClientSecret(res?.data?.client_secret);
                });
        }
    }, [axiosSecure, totalPrice]);


    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        //check stripe and elements exist . if this things do not exist return
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        // if card is null return
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            console.log('payment method', paymentMethod);
            setError('');
        }
        // confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log('confirm payment intent', paymentIntent);
            if (paymentIntent?.status === "succeeded") {
                setTransactionId(paymentIntent.id)
                return toast.success(`Thank You For Your Payment ${user?.displayName} sir.`)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className="flex justify-center mt-5">
                <button disabled={!stripe || !clientSecret} className="btn btn-success w-full lg:max-w-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
            <p className="text-red-500 mt-3">{error}</p>
            {transactionId && <p className="text-green-500 mt-3">Your Transaction Id : {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;