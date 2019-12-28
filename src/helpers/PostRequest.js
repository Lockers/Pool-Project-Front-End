import { useEffect } from 'react';
import Axios from 'axios';

export const usePostRequest = (endpoint, data) => {
    useEffect(() => {
        if(data.leaguePosition)
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
