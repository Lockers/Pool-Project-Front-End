import { useEffect } from 'react';
import Axios from 'axios';

export const useResultsPostRequest = (endpoint, data) => {
    useEffect(() => {
        console.log(data)
        if(data.newResult)
        Axios
            .post(`https://telford-pool-back-end.herokuapp.com/${endpoint}`, data)
            .then(response => {
                console.log('happy Path');
                window.location.reload();
            })
            .catch(error => {
                return console.log('Sad Path', error);
            })
    }, [endpoint, data])
}