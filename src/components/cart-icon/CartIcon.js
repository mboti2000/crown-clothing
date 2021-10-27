import React, { useMemo } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cartSlice';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const numberOfCartItems = useMemo(() => cartItems.reduce((acc,item) => acc+=item.quantity,0), [cartItems]);

    return (
        <div onClick={() => dispatch(toggleCartHidden())} className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{numberOfCartItems}</span>
        </div>
    )
}

export default CartIcon;
