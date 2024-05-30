import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();


    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        //check stripe and elements exist . if this things do not exist return
        if (!stripe || !elements) {
            return
        }
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
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
        }
        else {
            console.log('payment method', paymentMethod);
        }
        
    };
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
                <button className="btn btn-success w-full lg:max-w-sm" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckOutFrom;