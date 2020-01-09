import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Styled from 'styled-components'

const Div = Styled.div`
  display: flex;
  justify-self: center;
  margin: 0 auto;
  max-width: 375px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media(min-width: 600px){
      max-width: 800px;
  }
`

const Header = Styled.div`
  display: flex;
    flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media(min-width: 600px) {
  
    max-width: 800px;
  
}
`

const Img = Styled.img`
    display: flex;
    width: 350px;
    margin: 0 auto;
    height: 150px;
     @media(min-width: 600px) {
  
    max-width: 800px;
    width: 500px
  
}
`

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        alignItems: 'center'
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

export function NavBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Header>
            {/* <Div>
                <Img src={require('../components/images/Header.png')} alt='LOL' />
            </Div> */}
            <div>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    Menu
      </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClick={handleClose}
                    style={{textAlign: 'center'}}
                >
                    <StyledMenuItem style={{ textAlign: 'center' }}>
                        <ListItemText primary={<NavLink to="/">League Table</NavLink>} />
                    </StyledMenuItem>
                    <StyledMenuItem style={{ textAlign: 'center' }}>
                        <ListItemText primary={<NavLink to="/viewresults">Results</NavLink>} />
                    </StyledMenuItem>
                    <StyledMenuItem style={{ textAlign: 'center' }}>
                        <ListItemText primary={<NavLink to="/players">Players</NavLink>} />
                    </StyledMenuItem>
                    <StyledMenuItem style={{ textAlign: 'center' }}>
                        <ListItemText primary={<NavLink to="/viewchallenges">Upcoming Challenges</NavLink>} />
                    </StyledMenuItem>
                    <StyledMenuItem style={{ textAlign: 'center', fontWeight: 'boldest'}}>
                        <ListItemText primary={<NavLink to="/admin">Admin</NavLink>} />
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </Header>
    );
}