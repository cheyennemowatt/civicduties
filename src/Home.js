import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
        <nav className="navbar">
            <NavLink to="/" end className="nav-link">Home</NavLink>
            <NavLink to="/Learn" className="nav-link">Learn</NavLink>
            <NavLink to="/VoterHub" className="nav-link">VoterHub</NavLink>
            <NavLink to="/Discussion" className="nav-link">Discussion Forum</NavLink>
        </nav>
        <header className="main-header">
            <h1>Welcome to Our Civic Engagement Platform</h1>
            <p>Empowering underrepresented Massachusetts communities to learn about government and civic engagement.</p>
        </header>
        <section className="section">
            <h2>Educational Resources</h2>
            <p>Explore articles, videos, and infographics that simplify government and civic rights.</p>
        </section>

        <section className="section">
            <h2>Voter Registration</h2>
            <p>Find tools and resources to help you understand voter registration processes and deadlines.</p>
        </section>

        <section className="section">
            <h2>Upcoming Events</h2>
            <p>Check out our civic engagement calendar for important dates and community events.</p>
        </section>

        <section className="section">
            <h2>Discussion Forum</h2>
            <p>Join our community discussion forum to ask questions, share experiences, and connect with others.</p>
        </section>

        <section className="section">
            <h2>Get Involved</h2>
            <p>Learn how you can participate in your community and make your voice heard.</p>
        </section>
    </div>
  );
}

export default Home;