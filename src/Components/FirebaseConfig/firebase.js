import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDba7ViD-NXl2auf6CL6vd4REcq4Rc9K_4",
  authDomain: "todoapp-6d334.firebaseapp.com",
  projectId: "todoapp-6d334",
  storageBucket: "todoapp-6d334.appspot.com",
  messagingSenderId: "685581814160",
  appId: "1:685581814160:web:cf51a979fb7eeb261c0b15",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
