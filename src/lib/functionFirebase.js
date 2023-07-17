import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from './configFirebase.js';


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
export const getPost = (id) => getDoc(doc(db, 'post', id));

//actualizar un post
export const updatePost = (id, newFields) => {
  return updateDoc(doc(db, 'post', id), newFields)
  }