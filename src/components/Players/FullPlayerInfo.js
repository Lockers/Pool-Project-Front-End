import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '0 auto',
        marginTop: '3rem',
        backgroundColor: 'lightgrey'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const FullPlayerInfo = (props) => {
    
    const classes = useStyles();
    const [resultArray, setResultArray] = useState([...props.player.results ].reverse())
    const [expanded, setExpanded] = useState(false);

    const winPercentage = Math.round(props.player.won / props.player.played * 100);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const newArray = []

    resultArray.forEach(lel => {
        if (lel.challenger === props.player.name) {
            if (lel.challengerScore > lel.challengedScore)
                newArray.push('W')
            else if (lel.challengedScore > lel.challengerScore)
                newArray.push('L')
        }
        if (lel.challenged === props.player.name) {
            if (lel.challengedScore > lel.challengerScore)
                newArray.push('W')
            else if (lel.challengerScore > lel.challengedScore)
                newArray.push('L')
        }
    })
    
    return (
        <div>
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={props.player.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="div">
                        <p>League Position: {props.player.leaguePosition}</p>
                        <p>Played: {props.player.played}</p>
                        <p>Won: {props.player.won}</p>
                        <p>Win Percentage: {winPercentage}%</p>
                        <p>Form {newArray.slice(0, 6).reverse()} </p>
                       
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                        <Typography>Previous Results</Typography>
                        {resultArray.map((result, index) => <Typography key={index} style={{ fontSize: '14px'}}>
                            <span> {result.challenger} {result.challengerScore} - {result.challengedScore} {result.challenged} </span>
                        </Typography>)}
                </CardContent>
            </Collapse>
            </Card>
            </div>
    );
}
