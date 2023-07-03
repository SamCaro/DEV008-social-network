// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSM33A4KcVh5iOjo1bQBQU79wJkAWkyU8",
  authDomain: "the-bike-community.firebaseapp.com",
  projectId: "the-bike-community",
  storageBucket: "the-bike-community.appspot.com",
  messagingSenderId: "867099080364",
  appId: "1:867099080364:web:c0710bfc866c38c7f29109",
  measurementId: "G-QFQEM8JXB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
