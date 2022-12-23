import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7s-Rbi1Z8ClWFRJdvlwDO5wOYBwbDSmY",
    authDomain: "fir-962fa.firebaseapp.com",
    projectId: "fir-962fa",
    storageBucket: "fir-962fa.appspot.com",
    messagingSenderId: "725023829817",
    appId: "1:725023829817:web:fc932552a4f08bdb3302e8",
    measurementId: "G-GNXXB1WGT5"
  };

 export default  firebase.initializeApp(firebaseConfig)