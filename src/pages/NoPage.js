import React from 'react';
import { Link } from 'react-router-dom';
import PersonaPrepLogo from '../assets/logo/Persona Prep Coloured.png';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img
        src={PersonaPrepLogo}
        alt="Persona Prep Logo"
        style={{ width: '300px', marginBottom: '1%' }} 
      />
      <h1 style={styles.header}>404 - Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you are looking for might be in another castle.
      </p>
      <Link to="/home" style={styles.link}>
        <button style={styles.button}>Go Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  header: {
    fontSize: '3em',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.5em',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  button: {
    borderRadius: '10px',
    background: '#000',
    padding: '12px',
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: '1.2em',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default NotFound;
