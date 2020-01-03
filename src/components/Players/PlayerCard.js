// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from 'antd';
// import '../../App.css';
// import Styled from 'styled-components';

// const Div = Styled.div`
//     margin: 0 auto;
// `
// export const PlayerCard = (props) => {
    
//     return (
//         <Div className='playerCards'>
            
//             <Card title={props.player.name} style={{ width: '500px', margin: '1rem' }}>
//                 <p>{props.player.name}</p>
//                 <p>{props.player.dateOfBirth}</p>
//                 <p>{props.player.leaguePosition}</p>

                
//             </Card>
//         </Div>
//     )
// };

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        maxWidth: 450,
        margin: '10px 0 10px 0'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const PlayerCard = (props) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
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
                <Link to={`/players/${props.player._id}`}><Button onClick={(e) => props.handleClick(props.player._id)}>More Info</Button></Link>
                
            </CardActions>
        </Card>
    );
}