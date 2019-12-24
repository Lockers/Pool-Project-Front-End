import React, { useState, useEffect } from 'react';
import { useGetRequest } from '../../helpers/GetRequest';
import { Spin } from 'antd';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

export const AddResults = (props) => {
    const result = useGetRequest(`challenges/${props.challengeId}`)
    const [addChallengedScore, setAddChallengedScore] = useState({})
    const [addChallengerScore, setAddChallengerScore] = useState({})
    const [submitResult, setSubmitResult] = useState(result)
    const [resultId, setResultId] = useState()
    
    useEffect(() => {
        if (!result) {
            return <Spin />
        }
        Axios.post('http://localhost:5000/results', submitResult)
            .then(response => {
                setResultId(result.data._id)
            })
            .catch(error => {
                console.log(error)
            })
    }, [submitResult])

    useEffect(() => {
        if (!result) {
            return <Spin />
        }
        Axios.delete(`http://localhost:5000/challenges/${resultId}`)
            .then(response => {
                console.log(response)
                
            })
            .catch(error => {
                console.log(error)
                
            })

    }, [resultId])

    const submitHandler = () => {
        if (!result) {
            return <Spin />
        }

        const newobj = { ...result.data, ...addChallengedScore, ...addChallengerScore }
        setSubmitResult(newobj)

    }

    const challengedClickHandler = (e) => {
        setAddChallengedScore({ ...addChallengedScore, challengedScore: e.target.value })
    }
    const challengerClickHandler = (e) => {
        setAddChallengerScore({ ...addChallengerScore, challengerScore: e.target.value })
    }

    if (!result) {
        return <Spin />
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                readOnly={true}
                value={result.data.challenger}
            />
            <input
                type='number'
                onChange={challengerClickHandler}
                placeholder='0'
            />
            v
         <input
                type='number'
                onChange={challengedClickHandler}
                placeholder='0'
            />
            <input
                type='text'
                readOnly={true}
                value={result.data.challenged}
            />
            <input
                type='text'
                readOnly={true}
                value={result.data.venue}
            />
            <input
                type='text'
                readOnly={true}
                value={result.data.ruleset}
            />
            <input
                type='text'
                readOnly={true}
                value={result.data.pot}
            />
            <button>Submit</button>
        </form>
    )
}