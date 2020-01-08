import { useEffect } from 'react';
import Axios from 'axios';

// const url = 'http://localhost:5000/';
const url = 'https://telford-pool-back-end.herokuapp.com/';

export const usePostRequest = (endpoint, data, fire) => {
    useEffect(() => {
        if(fire === true)
            Axios
                .post(`${url}${endpoint}`, data)
                .then(response => {
                    if (response.data.token) {
                        window.localStorage.setItem('token', response.data.token)
                        alert('logged in')
                    }
                    console.log('happy Path', response);
                    alert('Added')
                    window.location.reload()
                    
                })
                .catch(error => {
                    console.log('sad Path', error);
                    alert('Not added you mong')
                    window.location.reload()
                })
    }, [endpoint, data, fire])
}
