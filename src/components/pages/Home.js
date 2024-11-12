import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Home.css';

function Home() {
  return (
    <div className="container1">
        <div className='card mt-4 '>
        </div>
        
        {/* Banner Section */}
      <div className="banner">
        <h1>Empowering Lynn, MA Through Civic Engagement</h1>
        {/*<h2>Your guide to understanding government, civic rights, and how to make a difference.</h2>*/}
        <NavLink to="/VoterHub">
            <button className="banner-btn">Get Involved</button>
        </NavLink>
      </div>
        
      <hr />
      {/* Educational Content Section */}
      <section className="education">
        <h3>Learn More Today</h3>
        <div className="education-grid">
          <div className="education-card">
            <h4>Government Structure</h4>
            <p>Learn about the three branches of government and how they function.</p>
            <NavLink to="/Government" className="card-link">Read More</NavLink>
          </div>
          <div className="education-card">
            <h4>Civic Rights</h4>
            <p>Understand your rights as a citizen and how to protect them.</p>
            <NavLink to="/Learn" className="card-link">Read More</NavLink>
          </div>
          <div className="education-card">
            <h4>How to Engage</h4>
            <p>Find out how to get involved in your community and make an impact.</p>
            <NavLink to="/Learn" className="card-link">Read More</NavLink>
          </div>
        </div>
      </section>
      <hr />
        {/* Main Content */}
      <div className="main-content">
        {/* Side-by-side sections */}
        <div className="info-sections">
          {/* Civic Engagement Calendar Section */}
      <section className="calendar">
        <h3 className="section-title">Civic Engagement Calendar</h3>
        <ul>
        <li><strong>Early Voting Starts:</strong> October 19, 2024</li>
          <li><strong>Last Day to Register to Vote:</strong> October 26, 2024</li>
          <li><strong>Election Day:</strong> November 5, 2024</li>
          <li><strong>City Council Meeting:</strong> November 12, 2024</li>
          <li><strong>School Committee Meeting:</strong> November 14, 2024</li>
          <li><strong>Affortable Housing Meeting:</strong> November 19, 2024</li>
          
        </ul>
        <p>Stay updated with events that shape your community. <NavLink to="/VoterHub">View Full Calendar</NavLink></p>
      </section>

          {/* Voter Registration and Information Section */}
      <section className="voter-info">
        <h3 className="section-title">Voter Registration & Information</h3>
        <p>Access resources to register to vote, check eligibility, and find polling locations.</p>
        <button onClick={() => window.location.href = '/VoterHub'}>Get Voter Information</button>
        <img src = "https://media.them.us/photos/5fa465ecfd7a2bab06d4a0cc/16:9/w_2560%2Cc_limit/GettyImages-83526818.jpg" alt="People Protesting for Voting"/>
        
      </section>
    
        </div>
      </div>

<hr />
      {/* Discussion Forum Section */}
      <section className="discussion">
        <h3>Join the Discussion</h3>
        <p>Ask questions, share your experiences, and connect with others in the community.</p>
        <button onClick={() => window.location.href = '/Discussion'}>Go to Forum</button>
      </section>
       
    
    </div>
  );
}

export default Home;