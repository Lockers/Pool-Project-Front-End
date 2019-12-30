import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <header>
            <NavLink className='links' to='/'>Home</NavLink>
            <NavLink className='links' to='players'>Players</NavLink>
            <NavLink className='links' to='/matches'>Matches</NavLink>
            <NavLink className='links' to='/upcomingchallenges'>UpComingChallenges</NavLink>
            <NavLink className='links' to='/addresult'>Add Old Result</NavLink>
            <NavLink className='links' to='/results'>View Results</NavLink>
        </header>
    )
}

