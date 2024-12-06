import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out can be added here (e.g., clearing authentication tokens)
    alert("You have been logged out.");
    navigate('/login'); // Redirect to the login page after logout
  };

  const handleLinkClick = (id) => {
    // Scroll to the section with the provided id
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><button onClick={() => handleLinkClick('home')} style={linkStyle}>Home</button></li>
          <li><button onClick={() => handleLinkClick('contents')} style={linkStyle}>Contents</button></li>
          <li><button onClick={() => handleLinkClick('images')} style={linkStyle}>Images</button></li>
          <li><button onClick={() => handleLinkClick('videos')} style={linkStyle}>Videos</button></li>
          <li><button onClick={() => handleLinkClick('profile')} style={linkStyle}>Profile</button></li>
          <li><button onClick={handleLogout} style={logoutButtonStyle}>Logout</button></li>
        </ul>
      </nav>

      {/* Homepage Content */}
      <div style={contentStyle} id="home">
        <h1>Welcome to your homepage!</h1>
        <p>You are successfully logged in.</p>
      </div>

      <div style={contentStyle} id="contents">
        <h1>Contents Section</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit inventore recusandae labore tenetur asperiores vero ratione facere earum quos molestiae...
        </p>
      </div>

      <div style={contentStyle} id="images">
        <h1>Images Section</h1>
        <p>Here is a collection of images related to the course.</p>
      </div>

      <div style={contentStyle} id="videos">
        <h1>Videos Section</h1>
        <p>Watch videos about your course materials here.</p>
      </div>

      <div style={contentStyle} id="profile">
        <h1>Profile Section</h1>
        <p>Manage your profile information.</p>
      </div>
    </div>
  );
}

// Styles
const navStyle = {
  backgroundColor: 'black',
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
  backgroundColor: '#FF6347',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '10px 15px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  cursor: 'pointer',
};

const logoutButtonStyle = {
  backgroundColor: '#FF6347', // Red color for logout button
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const contentStyle = {
  textAlign: 'center',
  marginTop: '30px',
};

export default Homepage;
