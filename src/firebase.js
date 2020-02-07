import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBTQI7YhV0I1_5GvLJKxU2X_BJU5J-Hn6A",
    authDomain: "slack-7ff7c.firebaseapp.com",
    databaseURL: "https://slack-7ff7c.firebaseio.com",
    projectId: "slack-7ff7c",
    storageBucket: "slack-7ff7c.appspot.com",
    messagingSenderId: "41380405552",
    appId: "1:41380405552:web:4ab26d96f721c21e5368f5",
    measurementId: "G-NDPJLYQ2QR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;