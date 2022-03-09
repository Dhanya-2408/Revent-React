import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCEI9vqTEc_ELbqNlR88SiQZ2puCT3vSM4",
  authDomain: "revents-62a4e.firebaseapp.com",
  projectId: "revents-62a4e",
  storageBucket: "revents-62a4e.appspot.com",
  messagingSenderId: "892629587509",
  appId: "1:892629587509:web:9a4ef3a5233ab342a5c37c",
  measurementId: "G-8KPR1E0XN6",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;