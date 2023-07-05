import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from './configFirebase.js';

export const ingresarGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider)
}

