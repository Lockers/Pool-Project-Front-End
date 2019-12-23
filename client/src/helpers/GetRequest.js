import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetRequest(endpoint) {
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(`https://telford-pool-back-end.herokuapp.com/${endpoint}`)
            .then(response => {
                console.log(response)
                setData(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [endpoint])
    return data;
}