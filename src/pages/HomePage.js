import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from '../components/AuthButton';

function HomePage() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>My Tickets</h1>
      <AuthButton />
      <p>Welcome to the My Tickets. Have an account? Please <Link to="/signin">sign in</Link> to manage tickets. If not then please <Link to="/signup">Sign Up</Link> first.</p>
      <p>Once signed in, go to <Link to="/tickets">Tickets</Link>.</p>
    </div>
  );
}

export default HomePage;
