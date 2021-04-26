import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDIwZoPGgIfLM4GqiiZxsC92nTXgBuPmHI",
    authDomain: "streact-a920c.firebaseapp.com",
    projectId: "streact-a920c",
    storageBucket: "streact-a920c.appspot.com",
    messagingSenderId: "585442955198",
    appId: "1:585442955198:web:d64c639e4254327ee973ef",
    measurementId: "G-52XWHE6VNY"

  };

  firebase.initializeApp(config)

  export default firebase;
