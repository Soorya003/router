// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <All />
        <FullStackDevelopment />
        <DataScience />
        <CyberSecurity />
        <Career />
      </div>
    </Router>
  );
};

export default App;
