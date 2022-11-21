// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW-WEiXZM7DaJRsdufHgBWyGDs1oH6Tyo",
  authDomain: "todo-vuetify-c3dac.firebaseapp.com",
  projectId: "todo-vuetify-c3dac",
  storageBucket: "todo-vuetify-c3dac.appspot.com",
  messagingSenderId: "120795959066",
  appId: "1:120795959066:web:642dd5862a10b1c5d6e6a3",
  measurementId: "G-WSDTRBQE65",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Collection ref
const colRef = collection(db, "projects");
export default colRef;
