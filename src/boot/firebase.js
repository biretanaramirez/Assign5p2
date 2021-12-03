import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyClAawlscgA_AgZnytJQVx54wk3lfwTpZw",
  authDomain: "quitter-a6334.firebaseapp.com",
  projectId: "quitter-a6334",
  storageBucket: "quitter-a6334.appspot.com",
  messagingSenderId: "1055847581784",
  appId: "1:1055847581784:web:aaba7281de928abb8c222d"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db 
