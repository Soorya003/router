import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

// Import other page components
const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
      
        <Link to="/">All</Link>
        <Link to="/full-stack-development"> Full Stack Development </Link>
        <Link to="/data-science"> Data Science </Link>
        <Link to="/cyber-security"> Cyber Security </Link>
        <Link to="/career"> Career </Link>
      
      </nav>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/full-stack-development" element={<FullStackDevelopment />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
        {/* Add routes for other pages */}
      </Routes>
    </div>
  );
};
export default Navigation;
