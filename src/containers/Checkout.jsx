import React, {useContext} from 'react';
import { Link } from "react-router-dom";
import AppContex from '../context/AppContext';
import Helmet from 'react-helmet';
import '../styles/components/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContex);
    const { cart } = state;

    const handleRemove = (product, i) => () => {
        removeFromCart(product, i);
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (  
        <>
            <Helmet>
                <title>Lista de pedidos - Merch</title>
            </Helmet>
            <div className="Checkout">
                <div className="Checkout-content">
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3> }
                    {cart.map((item, i) => (
                        <div className="Checkout-item" key={i+item.title}>
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                            <button type='button' onClick={handleRemove(item, i)}>
                                <li className='fas fa-trash-alt'/>
                            </button>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
                        <Link to='/checkout/information'>
                            <button type='button'>Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
 
export default Checkout;