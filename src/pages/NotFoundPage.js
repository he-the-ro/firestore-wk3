// src/pages/NotFoundPage.js

import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h1>404</h1>
      <p>The page you're looking for was not found.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
