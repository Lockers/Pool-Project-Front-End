import React from 'react';
import { Descriptions } from 'antd';
import Moment from 'react-moment';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Loader } from '../../misc/Loader';

const ResultsDiv = Styled.div`
margin: 1rem;
`
const Div = Styled.div`
    display: flex; 
    flex-direction: column;
    margin: 0 auto;
    max-width: 400px;
`

export const FullPlayerInfo = (props) => {

    function handleClick(e) {
        window.location.reload()
    }
    
    if (!props.player) {
        return (
            <Loader />
        )
    }
    
    return (
        <Div>
            <p>Name: {props.player.name}</p>
            <p>Played: {props.player.played}</p>
            <p>Won: {props.player.won}</p>
            <p>Total Prize Money Won: £{props.player.totalPrizeMoney}</p>
        
            <h1>Previous results</h1>
            {props.player.results.map((result, index) => {
                return (
                    <ResultsDiv key= { index }>
                    <Descriptions bordered={true} size='small' layout='vertical' column='xs'>
                        <Descriptions.Item label="Venue">{result.venue}</Descriptions.Item>
                        <Descriptions.Item label="Date"><Moment format="DD/MM/YYYY">{result.date}</Moment></Descriptions.Item>
                        <Descriptions.Item label="Ruleset">{result.ruleset}</Descriptions.Item>
                        <Descriptions.Item label="Pot">£{result.pot}</Descriptions.Item>
                        <Descriptions.Item label="Result">{result.challenger} {result.challengerScore} - {result.challengedScore} {result.challenged}</Descriptions.Item>
                        </Descriptions>
                    </ResultsDiv>
                    
                )
            })}
            <Button variant="contained" color="primary" onClick={handleClick}>Close</Button>
        </Div>
    )
}
