import React, {useState} from 'react';
import { Spin, Button } from 'antd';
import { usePostRequest } from '../../../helpers/PostRequest';

export const SubmitChallenge = (props) => {

    const [challenge, setChallenge] = useState()
    const [fire, setFire] = useState(false)

    usePostRequest('results/submit', challenge, fire)

    if (!props.challenge) {
        return <Spin />
    }

    let submitChallenge = { ...props.challenge }

    function submitHandler(e) {
        e.preventDefault()
        setChallenge(submitChallenge)
        // setFire(true)
    }

    function challengerFrameHandler(e) {
        e.preventDefault()
        submitChallenge = {...submitChallenge, challengerScore: e.target.value}
    }

    function challengedFrameHandler(e) {
        e.preventDefault()
        submitChallenge = { ...submitChallenge, challengedScore: e.target.value }
    }

    return (
        <div>
            <h1>Submit Challenge</h1>
            <form onSubmit={submitHandler}>
                <input
                    className='textInput'
                    type='text'
                    name='challenger'
                    value={props.challenge.challenger}
                />
                <input
                    className='numberInput'
                    type='number'
                    name='challengerFrames'
                    onChange={challengerFrameHandler}
                />

                :
                 <input
                    className='numberInput'
                    type='number'
                    name='challengedFrames'
                    onChange={challengedFrameHandler}
                />
                <input
                    className='textInput'
                    type='text'
                    name='challenged'
                    value={props.challenge.challenged}
                />
                <Button htmlType='submit'>Submit</Button>
            </form>
        </div>
    )
}