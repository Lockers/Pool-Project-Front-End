import { useEffect } from 'react';
import Axios from 'axios';

// const url = 'http://localhost:5000/';
const url = 'https://telford-pool-back-end.herokuapp.com/';

export const usePostRequest = (endpoint, data, fire) => {
    useEffect(() => {
        console.log(data)
        if(fire === true)
            Axios
                .post(`${url}${endpoint}`, data)
                .then(response => {
                    console.log('happy Path');
                    alert('Added')
                    window.location.reload()
                    
                })
                .catch(error => {
                    return console.log('Sad Path', error);
                })
    }, [endpoint, data, fire])
}
