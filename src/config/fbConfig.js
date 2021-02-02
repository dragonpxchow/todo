import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBoblRvmlWM9K-3-bQloL6QVOTY43UI6pM",
  authDomain: "todo-ipad.firebaseapp.com",
  databaseURL: "https://todo-ipad.firebaseio.com",
  projectId: "todo-ipad",
  storageBucket: "todo-ipad.appspot.com",
  messagingSenderId: "623957626285",
  appId: "1:623957626285:web:5412c96a014de0b557e524",
  measurementId: "G-2SC6QC9BFC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

*/
