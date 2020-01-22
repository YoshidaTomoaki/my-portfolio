import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBE81ER2WQhND0ddpjJdh2OK_ZtU0E9UhU",
  authDomain: "my-portfolio-a7b14.firebaseapp.com",
  databaseURL: "my-portfolio-a7b14.firebaseio.com",
  projectId: "my-portfolio-a7b14",
  storageBucket: "my-portfolio-a7b14.appspot.com",
  messagingSenderId: "831567689940"
};

firebase.initializeApp(config);

console.log('firebase initialize')