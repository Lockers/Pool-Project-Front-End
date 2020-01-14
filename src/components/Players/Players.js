import React  from 'react';
import Styled from 'styled-components';
import { Loader } from '../../misc/Loader';
import { useGetRequest } from '../../helpers/GetRequest';
import { FullPlayerInfo } from './FullPlayerInfo';


const Div = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    color: grey;
    background-color: 'yellow';
     @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`
export const Players = () => {
    const players = useGetRequest('players')

    if (!players) {
        return <Loader />
    }

    return (
        <Div>
            {players.data.map(card => {
                return <FullPlayerInfo key={card._id} player={card} />
            })}
        </Div>
    )
}