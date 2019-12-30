import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    const myFunction = () => {
     console.log('I am Clicked')
 }
    return (
        <div class="topnav">
  <div id="myLinks">
                <NavLink onClick={myFunction} to="/">Home</NavLink>
                <NavLink onClick={myFunction} to="/players">Players</NavLink>
                <NavLink onClick={myFunction} to="/addresult">Add Result</NavLink>
                <NavLink onClick={myFunction} to="/results">Results</NavLink>
                <NavLink onClick={myFunction} to="/matches">Add new Challenges</NavLink>
            </div>
        </div>
    )
}

