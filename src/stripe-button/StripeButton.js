import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JpGqpDV5hPQajs2Dl1zygZyDrtwNtDXAFOwDyvwjAQE7U8n34AEHpkraZsUMRGfVLe9etIyz8foCmoSfdHY9BDH00lvXoHnfL';

    const onToken = (token) =>{
        alert('Payment successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
    )
}

export default StripeButton;
