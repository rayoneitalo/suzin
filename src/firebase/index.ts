import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Setup firebase

const firebaseConfig = {
  apiKey: 'AIzaSyD_JS_JvNThiSO7nINav-ZsC5TKdJJdyaU',
  authDomain: 'project-suzin.firebaseapp.com',
  databaseURL: 'https://project-suzin.firebaseio.com',
  projectId: 'project-suzin',
  storageBucket: 'project-suzin.appspot.com',
  messagingSenderId: '315695697647',
  appId: '1:315695697647:web:2546d08a7991760fe0d51a',
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore, app as default };
