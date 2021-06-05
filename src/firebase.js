import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyANMJoKtlzUy17zi-L6JFKJaU26-yblRDM",
    authDomain: "disney-app-5793a.firebaseapp.com",
    projectId: "disney-app-5793a",
    storageBucket: "disney-app-5793a.appspot.com",
    messagingSenderId: "1006681177797",
    appId: "1:1006681177797:web:51fcc0e4c5205cb4fafaac",
    measurementId: "G-EVZJ1C3LQ3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;