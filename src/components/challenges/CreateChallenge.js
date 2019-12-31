import React from 'react';
import { useChallengeCreator } from '../../helpers/ChallengeHelper';
import { ChallengeForm } from './ChallengeForm';

export const CreateChallenge = (props) => {

    const challenge = useChallengeCreator(props.players)

    return (
        <div>
            <ChallengeForm challenge={challenge}/>
        </div>
    )
}