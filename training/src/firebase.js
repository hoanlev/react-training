import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDQyJLrHfs1N8D1uHDK7h7Vyb13DbgUxH8",
    authDomain: "exam-react.firebaseapp.com",
    databaseURL: "https://exam-react.firebaseio.com",
    projectId: "exam-react",
    storageBucket: "exam-react.appspot.com",
    messagingSenderId: "127559322909"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider()