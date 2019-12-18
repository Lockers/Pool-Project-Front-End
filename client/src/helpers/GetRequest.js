import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetRequest(endpoint) {
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(`https://telfordpoolserverapi.herokuapp.com/api/${endpoint}`)
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [endpoint])
    return data;
}