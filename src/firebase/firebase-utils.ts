import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBIKddFt0tS_fCTXp_zr7Dc0srM653-FOI',
  authDomain: 'crwn-db-b4048.firebaseapp.com',
  databaseURL: 'https://crwn-db-b4048.firebaseio.com',
  projectId: 'crwn-db-b4048',
  storageBucket: 'crwn-db-b4048.appspot.com',
  messagingSenderId: '422030838240',
  appId: '1:422030838240:web:0cc2a1d2d6326063880385',
  measurementId: 'G-JF3KDLYJ67',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
