import firebase from 'firebase'

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyC_s5NSheVXLN2i-GwnHbOFxPlBXd-iEww",
    authDomain: "clone-d841c.firebaseapp.com",
    projectId: "clone-d841c",
    storageBucket: "clone-d841c.appspot.com",
    messagingSenderId: "985562945369",
    appId: "1:985562945369:web:60754fee1b21059f57de48",
    measurementId: "G-3QT89MKJP2"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider}