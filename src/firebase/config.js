import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD39Q234rGK6VTCXfADckCtgM2pa_R3aCE",
  authDomain: "live-chat-d1b7a.firebaseapp.com",
  projectId: "live-chat-d1b7a",
  storageBucket: "live-chat-d1b7a.appspot.com",
  messagingSenderId: "953033075581",
  appId: "1:953033075581:web:daf2079c1950a10bc5fa14",
  measurementId: "G-RZ6CZNFX42",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
