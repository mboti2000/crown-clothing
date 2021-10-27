import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { getAuth,signOut } from '@firebase/auth';
import { useSelector } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    const hidden = useSelector((state) => state.cart.hidden);
    const auth = getAuth();

    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>

                {
                    currentUser !== null ? 
                    <div className='option' onClick={()=> signOut(auth)}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }

                <CartIcon />
            </div>
             {!hidden && <CartDropdown />}
        </div>
    )
}

export default Header;
