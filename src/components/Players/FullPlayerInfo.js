import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        margin: '0 auto',
        marginTop: '3rem',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    console.log(props)
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const winPercentage = Math.round(props.player.won / props.player.played * 100);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
            <CardMedia
                // className={classes.media}
                // image="/static/images/cards/paella.jpg"
                // title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                        <p>League Position: {props.player.leaguePosition}</p>
                        <p>Played: {props.player.played}</p>
                        <p>Won: {props.player.won}</p>
                        <p>Win: Percentage {winPercentage}%</p>
                       
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
                    <Typography paragraph>Previous Results</Typography>
                        {props.player.results.map(result => <Typography paragraph>
                            {result.challenger}
                            {result.challengerScore}-
                            {result.challengedScore}
                            {result.challenged}
                        </Typography>)}
                </CardContent>
            </Collapse>
            </Card>
            </div>
    );
}
