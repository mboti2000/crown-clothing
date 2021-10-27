import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cartSlice';

const CartDropdown = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const history = useHistory();
    const dispatch = useDispatch();

    const onOpenCheckout = () =>{
        history.push('/checkout');
        dispatch(toggleCartHidden());
    };

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length
                     ?
                    cartItems.map(item =>{
                        return <CartItem key={item.id} item={item}/>
                    })
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={onOpenCheckout}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;
