import { useState, useEffect } from 'react';
import axios from 'axios';


const url = 'http://localhost:5000/';
// const url = 'https://telford-pool-back-end.herokuapp.com/';

export function useGetRequest(endpoint) {
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(`${url}${endpoint}`)
            .then(response => {
                setData(response)
                
            })
            .catch(error => {
                console.log(error)
            })
    }, [endpoint])
    return data;
}