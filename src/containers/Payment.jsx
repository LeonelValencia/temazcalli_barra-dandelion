import React, {useContext} from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'

const Payment = ({history}) => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions ={ 
        clientId: 'AS12EX0JnMEOU0B9vtbHIj1oad-hTI3GhonGA1srCBj2JWsQyZ4NzEv1OW3kwpIfvGCT1Lhkp-XSlC14',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        if (data.status == 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder)
            navigate('/checkout/success')
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (  
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map((item) => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div />
        </div>
    );
}
 
export default Payment;