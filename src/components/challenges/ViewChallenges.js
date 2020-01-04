import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';
import { useGetRequest } from '../../helpers/GetRequest';
import { Loader } from '../../misc/Loader';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const ViewChallenges = () => {
    const challenges = useGetRequest('challenges')
    const classes = useStyles();

    if (!challenges) {
        return <Loader />
    }
    return (
        
        <div>
            {challenges.data.map(challenge => {
                return (
                    <List component="nav" className={classes.root} aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText>
                                {challenge.challenger} v {challenge.challenged} <br />
                                Venue: {challenge.venue} Rule set :{challenge.ruleset} <br />
                                Pot: {challenge.pot} Date {challenge.date ? <Moment format="DD/MM/YYYY">{challenge.date}</Moment> : 'No Date'}
                            </ListItemText>
                            </ListItem>
                         <Divider />
                    </List>
                )
            })}
        </div>
    )}
