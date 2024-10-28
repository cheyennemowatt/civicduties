import React from 'react';
import './Discussion.css';
import { NavLink } from 'react-router-dom';

function Discussion() {
  return (
    <div className="discussion">
        <nav className="navbar">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/Learn" className="nav-link">Learn</NavLink>
            <NavLink to="/VoterHub" className="nav-link">VoterHub</NavLink>
            <NavLink to="/Discussion" className="nav-link">Discussion Forum</NavLink>
        </nav>
    </div>
  );
}

export default Discussion;