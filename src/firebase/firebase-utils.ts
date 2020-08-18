import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC7oI1pczDaOojXngS-E3-6A7olg2rP0NU',
  authDomain: 'suzin-f9882.firebaseapp.com',
  databaseURL: 'https://suzin-f9882.firebaseio.com',
  projectId: 'suzin-f9882',
  storageBucket: 'suzin-f9882.appspot.com',
  messagingSenderId: '812701540151',
  appId: '1:812701540151:web:6a847fdd2c03a4014144b2',
  measurementId: 'G-B8QJGTERPC',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authenticate with user google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Authenticate with user and password
export const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
