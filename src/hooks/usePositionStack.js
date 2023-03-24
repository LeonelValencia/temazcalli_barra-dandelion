import { useState, useEffect } from "react";
import axios from 'axios';

//"http://api.positionstack.com/v1/forward ? access_key = rwc6l00gdwzv24l8c7877scitwa2rtj2 & query = 1600 Pennsylvania Ave NW, Washington, Washington DC, Estados Unidos"
const url = 'http://api.positionstack.com/v1/forward';

const usePositionStack = () => {
    const [map, setMap] = useState([]);

    const params = new URLSearchParams({
        access_key: '5f3c190cab32052b35b7d76906d417e7',
        query: '1600 Pennsylvania Ave NW, Washington, Washington DC, Estados Unidos'
    }).toString();

    useEffect(() => {
        (async () => {
            const response = await axios(`${url}?${params}`)
            const result = [response.data.data[0].latitude,response.data.data[0].longitude]
            console.log(result);
            setMap(result)
        })()
    }, []); 

    return map;
}

export default usePositionStack;