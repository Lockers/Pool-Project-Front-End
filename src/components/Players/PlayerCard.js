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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;
`

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        margin: '10px 0 10px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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