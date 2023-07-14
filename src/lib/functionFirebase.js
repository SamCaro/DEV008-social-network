import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './configFirebase.js';
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore';

export const ingresarGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

export function signIn(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//añadir documento a la coleccion y guardarlo
 export const savePost = (publish) => {
return addDoc(collection(db, "post"), {
  user: "Sofía",
  post: publish,
});
//console.log("Document written with ID: ", docRef.id);
}

//obtener posts 
export const getPosts = () => getDocs(collection(db, 'post'));

//eliminar post
export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

//obtener un post
export const getPost = (id) => getDoc(doc(db, 'post', id))