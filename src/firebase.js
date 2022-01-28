
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkigJs9f7_VSBtLH7RTZvgSqE7QK3ctTg",
  authDomain: "disneyplus-clone-9a40c.firebaseapp.com",
  projectId: "disneyplus-clone-9a40c",
  storageBucket: "disneyplus-clone-9a40c.appspot.com",
  messagingSenderId: "1022452040910",
  appId: "1:1022452040910:web:ef77a29fa3db03b65a3c9f",
  measurementId: "G-4QZHWNRBN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(app);


// const firebaseApp = initializeApp(firebaseConfig);

// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider, storage };
export default db;
