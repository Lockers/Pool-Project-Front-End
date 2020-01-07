import React, {useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';
import { FullPlayerInfo } from './FullPlayerInfo';

const Player = Styled.div`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 5rem;
    margin-top: 5rem;
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
   
    const classes = useStyles();
    const [player, setPlayer] = useState()

    const handleClick = (e) => {
        setPlayer(e)
    }
    if (player) {
        return <FullPlayerInfo player={player}/>
    }
    
    return (
        <div>
        <Player>
            <Card className={classes.card} variant="outlined">
                <CardContent>
                        <Typography className={classes.title} variant="h6" color="textSecondary" gutterBottom>
                        {props.player.name}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        Played: {props.player.played}
                    </Typography>
                        <Typography className={classes.pos} variant="h6" color="textSecondary">
                        Won: {props.player.won}
                    </Typography>
                </CardContent>
                <CardActions>
                        <Button variant='contained' color='primary' onClick={(e) => handleClick(props.player)}>More Info</Button>
                </CardActions>
            </Card>
            </Player>
        </div>
    );
}