import { useEffect } from 'react';
import Axios from 'axios';

export const useDeleteRequest = (endpoint) => {
    useEffect(() => {
        if(endpoint)
            Axios
                .delete(`https://telford-pool-back-end.herokuapp.com/players/${endpoint}`)
                .then(response => {
                    console.log('happy Path');
                    window.location.reload();
                })
                .catch(error => {
                    return console.log('Sad Path', error);
                })
    }, [endpoint])
}