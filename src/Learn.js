import React from 'react';
import './Learn.css';
import { NavLink } from 'react-router-dom';

function Learn() {
  return (
    <div className="learn">
        <nav className="navbar">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/Learn" className="nav-link">Learn</NavLink>
            <NavLink to="/VoterHub" className="nav-link">VoterHub</NavLink>
            <NavLink to="/Discussion" className="nav-link">Discussion Forum</NavLink>
        </nav>
    </div>
  );
}

export default Learn;