import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import './styles.css';

function App() {
  const { user, loadingAuth } = useAuth();

  if (loadingAuth) {
    return <p>Checking auth status...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Protected route: only accessible if user is signed in */}
        <Route
          path="/tickets/*"
          element={
            <ProtectedRoute user={user}>
              {/* Insert routes for /tickets here */}
            </ProtectedRoute>
          }
        />
        
        <Route path="/signin" element={<SignInPage />} />
        
        {/* 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

