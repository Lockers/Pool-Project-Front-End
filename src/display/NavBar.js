import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    const myFunction = () => {
 }
    return (
        <div className="topnav">
  <div id="myLinks">
                <NavLink onClick={myFunction} to="/">League Table</NavLink>
                <NavLink onClick={myFunction} to="/players">Players</NavLink>
                <NavLink onClick={myFunction} to="/viewresults">Results</NavLink>
                <NavLink onClick={myFunction} to="/challenges">Upcoming Challenges</NavLink>
                <NavLink onClick={myFunction} to="/playeradmin">Player Admin</NavLink>
                <NavLink onClick={myFunction} to="/addresult">Result Admin</NavLink>
                <NavLink onClick={myFunction} to="/createchallenge">Challenge Admin</NavLink>
            </div>
        </div>
    )
}

