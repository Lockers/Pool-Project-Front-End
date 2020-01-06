import React  from 'react';
import { PlayerCard } from './PlayerCard';
import Styled from 'styled-components';
import { Loader } from '../../misc/Loader';
import { useGetRequest } from '../../helpers/GetRequest';

const Div = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
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
                return <PlayerCard key={card._id} player={card} />
            })}
        </Div>
    )
}