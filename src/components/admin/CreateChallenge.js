import React from 'react';
import { useChallengeCreator } from '../../helpers/ChallengeHelper';
import { ChallengeForm } from './ChallengeForm';
import { AmendChallenges } from './AmendChallenges'

const CreateChallenge = (props) => {

    const challenge = useChallengeCreator(props.players)

    return (
        <div>
            <ChallengeForm challenge={challenge} />
            <AmendChallenges resultHandler={props.resultHandler} players={props.players}/>
        </div>
    )
}
export default CreateChallenge;