// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4jfATFGVx8qyaK_JmQ6nzrXzZD8sYOq4",
    authDomain: "whatsapp-clone-601f8.firebaseapp.com",
    projectId: "whatsapp-clone-601f8",
    storageBucket: "whatsapp-clone-601f8.appspot.com",
    messagingSenderId: "950133463405",
    appId: "1:950133463405:web:c381d4d01ee07e8f522264",
    measurementId: "G-5PMVKETMLJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;