import { useEffect } from 'react';
import Axios from 'axios';

export const usePostRequest = (endpoint, data) => {
    useEffect(() => {
        if (data.leaguePosition)
            Axios
                .delete(`https://telford-pool-back-end.herokuapp.com/${endpoint}`)
                .then(response => {
                    console.log('happy Path');
                    location.reload()
                })
                .catch(error => {
                    return console.log('Sad Path', error);
                })
    }, [endpoint, data])
}