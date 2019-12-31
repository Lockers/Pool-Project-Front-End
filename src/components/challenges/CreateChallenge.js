import React from 'react';
import { useChallengeCreator } from '../../helpers/ChallengeHelper';
import { Form } from './Form';

export const CreateChallenge = (props) => {

    const challenge = useChallengeCreator(props.players)

    return (
        <div>
            <Form challenge={challenge}/>
        </div>
    )
}