import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdsE2uwRQrjL0YDV6hWLp8Eu0lnv9m3Yk",
  authDomain: "ninja-chat-5dee6.firebaseapp.com",
  databaseURL: "https://ninja-chat-5dee6.firebaseio.com",
  projectId: "ninja-chat-5dee6",
  storageBucket: "ninja-chat-5dee6.appspot.com",
  messagingSenderId: "650900845769"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
