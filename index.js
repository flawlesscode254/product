const firebase = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyAGSoMwtlv7Jh8H-GwCKqfZOdnul-7SuXQ",

    authDomain: "money-disbursion.firebaseapp.com",
  
    projectId: "money-disbursion",
  
    storageBucket: "money-disbursion.appspot.com",
  
    messagingSenderId: "194461712693",
  
    appId: "1:194461712693:web:c72ca3d859a14f4fe5cc7c"
  
};
firebase.initializeApp(firebaseConfig);
require('firebase/firestore')
require('firebase/auth')
const db = firebase.firestore()

const addData = () => {
    db.collection("users").add({
        amount: 120000
    }).then(() => {
        console.log("Information added successfully");
    })
}

// const createUser = () => {
//     auth.signInWithEmailAndPassword(email, password)
// }

addData()