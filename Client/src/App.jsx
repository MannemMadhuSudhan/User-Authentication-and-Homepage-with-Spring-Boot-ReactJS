import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Ensure this is the navbar component with links
import Home from './components/Home';  // Home page component
import Register from './components/Register';  // Register page component
import Login from './components/Login';  // Login page component
import Homepage from './components/Homepage';  // Homepage after login

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />  {/* Home page with Register/Login links */}
      <Route path="/register" element={<Register />} />  {/* Register page */}
      <Route path="/login" element={<Login />} />  {/* Login page */}
      <Route path="/homepage" element={<Homepage />} />  {/* Homepage after login */}
    </Routes>
  </Router>
);

export default App;
