// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
require("firebase/auth");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsDUXQxVahwmAZPkSctT5GHRdprjPUQNY",
  authDomain: "housebuddy-e8018.firebaseapp.com",
  projectId: "housebuddy-e8018",
  storageBucket: "housebuddy-e8018.appspot.com",
  messagingSenderId: "1097026521280",
  appId: "1:1097026521280:web:68d4e8d8ff394578404525",
  measurementId: "G-ZRC30BGJE1",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
