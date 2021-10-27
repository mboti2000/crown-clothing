import React from 'react';
import './CheckoutItem.scss';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart, removeSingleFromCart } from '../../redux/cartSlice';

const CheckoutItem = ({ cartItem: {id, name, imageUrl, price, quantity }}) => {
    const dispatch = useDispatch();
    const cartItem = {id, name, imageUrl, price, quantity };

    const decreaseQuantitiy = (item) =>{
        if(item.quantity > 1){
            dispatch(removeSingleFromCart(item));
        } else {
            dispatch(removeFromCart(item));
        }
    }

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="checkout item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => decreaseQuantitiy(cartItem)} className="arrow">&#10094;</div>
                    <span className="value">{quantity}</span>
                <div onClick={() => dispatch(addToCart(cartItem))} className="arrow">&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-button" onClick={() => dispatch(removeFromCart(cartItem))}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;
