import React, { useMemo } from 'react';
import './CheckoutPage.scss';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { useSelector } from 'react-redux';
import StripeButton from '../../stripe-button/StripeButton';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice =  useMemo(() => cartItems.reduce((acc,item) => acc+=item.quantity * item.price,0), [cartItems]);

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(item =>{
                   return <CheckoutItem key={item.id} cartItem={item}/>
                })
            }
            <span className="total">TOTAL: ${totalPrice}</span>
            <StripeButton className="button" price={totalPrice} />
        </div>
    )
}

export default CheckoutPage;
