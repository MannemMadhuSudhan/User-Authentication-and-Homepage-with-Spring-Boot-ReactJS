import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import `Link`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8092/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/homepage'); // Redirect to homepage
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login.');
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

      {/* Login Form */}
      <div style={formContainerStyle}>
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={formStyle}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
};

// Styles
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

const formContainerStyle = {
  textAlign: 'center',
  marginTop: '30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '50px auto',
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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

export default Login;
