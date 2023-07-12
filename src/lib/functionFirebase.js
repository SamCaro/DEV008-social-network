import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './configFirebase.js';
import { collection, addDoc } from 'firebase/firestore';

export const ingresarGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export function signIn(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const savePost = (publish) => {
const docRef = addDoc(collection(db, "post"), {
  user: "Sofía",
  post: publish,
});
//console.log("Document written with ID: ", docRef.id);
}
