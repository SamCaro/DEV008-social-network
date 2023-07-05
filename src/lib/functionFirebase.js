import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { auth } from './configFirebase.js';

export const ingresarGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider)
    .then((result) => {
      console.log("hola");
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...

      // if (error.code === 'auth/email-already-in-use') {
      //   alert('invalid email')
      // }
    });
};

