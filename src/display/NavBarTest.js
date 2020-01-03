import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import Styled from 'styled-components'

const Div = Styled.div`
  height: 200px;
  background-image: url('https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/60226370_451746165574309_3893019607623008256_o.png?_nc_cat=104&_nc_ohc=WAs40wpBGVQAQmWyYQRg3rP0rIG78D8cYaszIjXdIQUUTutGy_GxJk6ZQ&_nc_ht=scontent-lhr3-1.xx&oh=adcd199920e219030e7fe360eceb8dae&oe=5EA43766');
  background-size: 550px 200px;
  background-repeat: no-repeat;
`

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='header'>
        <Div>
        </Div>
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                Open Menu
      </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        {/* <SendIcon fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText primary={<NavLink to="/">League Table</NavLink>} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        {/* <DraftsIcon fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        {/* <InboxIcon fontSize="small" /> */}
                    </ListItemIcon>
                    <ListItemText primary={<NavLink to="/players">Players</NavLink>} />
                </StyledMenuItem>
            </StyledMenu>
            </div>
        </div>
    );
}