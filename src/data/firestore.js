// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA93M_b7URDrpKhG_4iX3iAFSkriKcdg0Q",
  authDomain: "booba-paradise.firebaseapp.com",
  projectId: "booba-paradise",
  storageBucket: "booba-paradise.appspot.com",
  messagingSenderId: "660503616203",
  appId: "1:660503616203:web:040333e18ea063ac12594e",
  measurementId: "G-97EYTJFPPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
