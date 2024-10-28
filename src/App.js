
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Learn from './Learn';
import VoterHub from './VoterHub';
import Discussion from './Discussion';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" end>Home</NavLink> | 
          <NavLink to="/Learn">Learn</NavLink> | 
          <NavLink to="/VoterHub">Voter Hub</NavLink>
          <NavLink to="/Discussion">Discussion</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/VoterHub" element={<VoterHub />} />
          <Route path="/Discussion" element={<Discussion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
