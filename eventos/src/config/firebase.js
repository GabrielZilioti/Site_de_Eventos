import firebase from 'firebase';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBidU7Se2EwnZFs1FcS92DmeeCDDA6OIyc",
    authDomain: "eventos-da969.firebaseapp.com",
    projectId: "eventos-da969",
    storageBucket: "eventos-da969.appspot.com",
    messagingSenderId: "184524735489",
    appId: "1:184524735489:web:ba8040b3305e3529746c00"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);
