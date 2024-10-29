import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Learn from './components/pages/Learn';
import Discussion from './components/pages/Discussion';
import VoterHub from './components/pages/VoterHub';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/Learn" element={<Learn/>} />
          <Route exact path ="/Discussion" element={<Discussion/>} />
            
          <Route exact path ="/VoterHub" element={<VoterHub/>} />
            
        </Routes>
        
      </div>
    </Router>
  );
}
export default App;
