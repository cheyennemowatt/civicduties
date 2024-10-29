import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            {/*
            <a class="navbar-brand" href="#">Civic Duties</a> */}
            
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <hr></hr>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            
                            <Link to = '/Home' class="nav-link" >Home</Link>
                        </li>
                        <li class="nav-item">
                            
                            <Link to = '/Learn' class="nav-link" >Learn</Link>
                        </li>
                        
                        <li class="nav-item">
                            
                            <Link to = '/VoterHub'class="nav-link" > Voter Hub</Link>
                        </li>
                        <li class="nav-item">
                            
                            <Link to = '/Discussion Forum' class="nav-link" >Discussion Forum</Link>
                        </li>
                    </ul>
                    {/*
                    <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
  */}
                </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;