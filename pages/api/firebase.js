import firebase from "firebase/app";

 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbA9XQKkd5sQZriu1arPwPCsJnI54-UCQ",
    authDomain: "login-63f23.firebaseapp.com",
    projectId: "login-63f23",
    storageBucket: "login-63f23.appspot.com",
    messagingSenderId: "112530385026",
    appId: "1:112530385026:web:da001d7d586e2b638a2c9b"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;