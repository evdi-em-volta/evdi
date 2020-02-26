import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgYrEOBr4fnrDXCnkDrWWXpmGmxdGUbTo",
    authDomain: "benti-clothing.firebaseapp.com",
    databaseURL: "https://benti-clothing.firebaseio.com",
    projectId: "benti-clothing",
    storageBucket: "benti-clothing.appspot.com",
    messagingSenderId: "1054247781196",
    appId: "1:1054247781196:web:2f80e388edc4707757c5e9",
    measurementId: "G-G8JLG8FK40"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
           await userRef.set({
            displayName,
            email,
            createAt,
            ...additionalData

           })
        } catch (error) {
          console.log('error creating user', error.message);

        }
    }


  return userRef;
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;