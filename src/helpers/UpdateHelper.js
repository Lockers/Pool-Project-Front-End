import { useEffect } from 'react';
import Axios from 'axios';

// const url = 'http://localhost:5000/';
const url = 'https://telford-pool-back-end.herokuapp.com/';

export const useUpdateRequest = (endpoint, data, fire) => {
    useEffect(() => {
        if (fire === true)
            Axios
                .put(`${url}${endpoint}`, data)
                .then(response => {
                    alert('challenge updated')
                    console.log('happy Path', response);
                    window.location.reload();

                })
                .catch(error => {
                    alert('something went wrong')
                    console.log('Sad Path', error);
                    window.location.reload();
                })
    }, [endpoint, data, fire])
}