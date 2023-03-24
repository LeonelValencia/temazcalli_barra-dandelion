import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import '../styles/components/Success.css'
import usePositionStack from '../hooks/usePositionStack';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    // const address = `${buyer[0].address}, ${buyer[0].city}, ${buyer[0].state}, ${buyer[0].country}`;
    // const location = usePositionStack()
    // console.log(location);

    return (  
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}
 
export default Success;