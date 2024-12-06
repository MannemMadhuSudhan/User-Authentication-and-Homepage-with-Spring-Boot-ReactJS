import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Welcome to the Registration & Login System</h1>
        <p>Sign up or log in to access your homepage.</p>
      </div>
    </div>
  );
}

export default Home;
