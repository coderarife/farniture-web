import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDmxekSsV7NZ1LlMxWFgmuDvLpGs-ytzKQ",
  authDomain: "chatapp-bingo.firebaseapp.com",
  databaseURL: "https://chatapp-bingo-default-rtdb.firebaseio.com",
  projectId: "chatapp-bingo",
  storageBucket: "chatapp-bingo.appspot.com",
  messagingSenderId: "1045528474489",
  appId: "1:1045528474489:web:7d3a6095268fc3b7fd75a8"
};

const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }