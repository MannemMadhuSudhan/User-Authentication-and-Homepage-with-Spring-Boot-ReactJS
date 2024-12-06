import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8092/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.text();
        alert(data);
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed!");
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/register" style={linkStyle}>Register</Link></li>
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
        </ul>
      </nav>

      {/* Registration Form */}
      <div>
        <h1>Register</h1>
        <form onSubmit={handleRegister} style={formStyle}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
      </div>
    </div>
  );
};

// Styling for the Navigation Bar and Form
const navStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center', /* Center the navigation bar */
  gap: '20px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '10px 15px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '50px auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '4px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Register;
