import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import Discussion from './components/pages/Discussion';
import VoterHub from './components/pages/VoterHub';
import Government from './components/pages/Government';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './components/pages/css/Home.css';



function App() {
  return (
    <Router>
      <div>
        
      <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path ="Government" element={<Government/>} />
          <Route exact path = "Learn" element={<Learn/>} />
          <Route exact path ="Discussion" element={<Discussion/>} />
            
          <Route exact path ="VoterHub" element={<VoterHub/>} />
            
        </Routes>
      {/* Footer */}
      <footer>
      <div className="language-section">
        <p>Select your preferred language for a more personalized experience.</p>
        <select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">Creole</option>
          <option value="zh">Mandarin</option>
        </select>
        </div>
      </footer>
      </div>
    </Router>
   
  );
}
export default App;
