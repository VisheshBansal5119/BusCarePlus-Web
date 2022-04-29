import {initializeApp} from "firebase/app";
  //import firebase from 'firebase/firebase-database-compat';
  import firebase from 'firebase/compat/app';
 



const firebaseConfig = {
  apiKey: "AIzaSyDrNKtsgFVieRc9cY_i3Saff5iCfF8HQeY",
  authDomain: "buscareplus-db77c.firebaseapp.com",
  databaseURL: "https://buscareplus-db77c-default-rtdb.firebaseio.com",
  projectId: "buscareplus-db77c",
  storageBucket: "buscareplus-db77c.appspot.com",
  messagingSenderId: "834359603560",
  appId: "1:834359603560:web:7151bf568707a51eda66dd",
  measurementId: "G-XPMKWDNL9J"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

   export default firebaseApp; 