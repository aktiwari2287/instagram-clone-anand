import firebase from "firebase";
const firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyDoxBwB724YEvy4cJcSaYyN2bLvjXVkilg",
  authDomain: "instagram-clone-anand.firebaseapp.com",
  projectId: "instagram-clone-anand",
  storageBucket: "instagram-clone-anand.appspot.com",
  messagingSenderId: "383502237174",
  appId: "1:383502237174:web:003e294029d6184e5bdbd7",
  measurementId: "G-K5357L998J",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
