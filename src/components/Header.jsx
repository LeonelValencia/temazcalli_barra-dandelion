import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext';
import '../styles/components/Header.css'

const Header = () => {
    const { state } = useContext(AppContext)
    const { cart } = state;

    return (  
        <div className='Header'>
            <Link to='/'>
                <img src="https://i.postimg.cc/Z5j4gQjP/banner.png" alt="Logo Temazcalli" className='Header-logo' />
            </Link>

            <div className='Header-checkout'>
                <Link to='/checkout'>
                    <i className='fas fa-shopping-basket' />
                </Link>
                {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
            </div>
        </div>
    );
}
 
export default Header;