import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function AuthButton() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (!user) {
    return null;
  }

  return (
    <button style={{ backgroundColor: '#bada55' }} onClick={handleSignOut}>
      Sign Out
    </button>
  );
}

export default AuthButton;
