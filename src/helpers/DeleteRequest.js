import { useEffect } from 'react';
import Axios from 'axios';

// const url = 'http://localhost:5000/players/';
const url = 'https://telford-pool-back-end.herokuapp.com/players/';

export const useDeleteRequest = (endpoint, fire) => {
    useEffect(() => {
        if(fire === true)
            Axios
                .delete(`${url}${endpoint}`)
                .then(response => {
                    alert('Player Deleted')
                    console.log('happy Path');
                    window.location.reload();
                    
                })
                .catch(error => {
                    alert('something went wrong')
                    console.log('Sad Path', error);
                    window.location.reload();
                })
    }, [endpoint, fire])
}