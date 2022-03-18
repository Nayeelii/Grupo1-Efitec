const firebaseConfig = {
    apiKey: "AIzaSyBgnrwWcoMdqzZ5YFMmVAvj0P9LmwHrt40",
    authDomain: "proyecto-efitec.firebaseapp.com",
    projectId: "proyecto-efitec",
    storageBucket: "proyecto-efitec.appspot.com",
    messagingSenderId: "563039411569",
    appId: "1:563039411569:web:6d8ef85f38a8854015aad0"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); 
const db = firebase.firestore();