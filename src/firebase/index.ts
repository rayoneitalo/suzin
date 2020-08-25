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

export default firebase;
