import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Freelance Teacher</h2>
      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f2f2f2' },
  logo: { margin: 0 },
  links: { display: 'flex', gap: '1rem' },
};

export default Navbar;
