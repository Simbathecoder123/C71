import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAg_PoKjiE3D0eFObVg4_9iBPJ1gpVYPwc",
    authDomain: "pro-c71-85643.firebaseapp.com",
    projectId: "pro-c71-85643",
    storageBucket: "pro-c71-85643.appspot.com",
    messagingSenderId: "75204196902",
    appId: "1:75204196902:web:68878124306583ce0084e7"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
