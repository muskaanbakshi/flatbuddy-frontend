import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';  

firebase.initializeApp( {
    apiKey: "AIzaSyBWKDeWvep9DU5A2nrclkpllct6im49tOw",
    authDomain: "insta-clone-bc62d.firebaseapp.com",
    projectId: "insta-clone-bc62d",
    storageBucket: "insta-clone-bc62d.appspot.com",
    messagingSenderId: "61070280936",
    appId: "1:61070280936:web:71aaa2000648465247215d"
  });

  const auth = firebase.auth();
  const storage = firebase.storage();

  export {auth,storage};