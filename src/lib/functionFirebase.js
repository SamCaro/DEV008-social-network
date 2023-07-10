import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './configFirebase.js';

export const ingresarGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
