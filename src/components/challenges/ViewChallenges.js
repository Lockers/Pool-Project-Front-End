import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';
import { useGetRequest } from '../../helpers/GetRequest';
import { Loader } from '../../misc/Loader';
import Styled from 'styled-components';

const Challenges = Styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    max-width: 400px;
    margin: 1rem auto;
    text-align: center;

     @media(min-width: 600px) {
     width: 600px;
  
}
`

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: 'lightgrey',
    },
}));

export const ViewChallenges = (props) => {
    const challenges = useGetRequest('challenges')
    const classes = useStyles();

    if (!challenges) {
        return <Loader />
    }
    return (
        
        <Challenges>
            <h1>Challenges</h1>
            {challenges.data.map(challenge => {
                return (
                    <List component="nav" className={classes.root} aria-label="mailbox folders" key={challenge._id}>
                        <ListItem button >
                            <ListItemText style={{ textAlign: 'center' , lineHeight: '3'}}>
                                {challenge.challenger} v {challenge.challenged} <br />
                                Venue: {challenge.venue} <br />
                                Rule set :{challenge.ruleset} <br />
                                Pot: {challenge.pot}<br />
                                Date: {challenge.date ? <Moment format="DD/MM/YYYY">{challenge.date}</Moment> : 'No Date'}
                            </ListItemText>
                            </ListItem>
                         <Divider />
                    </List>
                )
            })}
        </Challenges>
    )}
