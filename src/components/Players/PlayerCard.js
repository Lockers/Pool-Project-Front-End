import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FullPlayerInfo } from './FullPlayerInfo';
import Styled from 'styled-components';

const Player = Styled.div`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 5rem;
     @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '5rem',
        
    },
});


export const PlayerCard = (props) => {
    const [player, setPlayer] = useState()

    const handleClick = (e) => {
        setPlayer(e)
    }

    const classes = useStyles();

    return (
        <Player>
            <FullPlayerInfo player={player} />
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Name: {props.player.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Played: {props.player.played}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Won: {props.player.won}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Total Prize Money £{props.player.totalPrizeMoney}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' color='primary' onClick={(e) => handleClick(props.player)}>More Info</Button>
                </CardActions>
            </Card>
        </Player>
    );
}