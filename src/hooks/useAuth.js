import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

/**
 * Custom hook that tracks the current Firebase Auth user
 */
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoadingAuth(false);
    });
    // Clean up subscription
    return () => unsubscribe();
  }, []);

  return { user, loadingAuth };
};
