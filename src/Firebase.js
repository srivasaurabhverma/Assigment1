import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8rG1iZMTt1Yt_p1MNoeuC3IarJgr662Q",
  authDomain: "assigment1-25532.firebaseapp.com",
  projectId: "assigment1-25532",
  storageBucket: "assigment1-25532.appspot.com",
  messagingSenderId: "544366413610",
  appId: "1:544366413610:web:da0ba1f5e9d47c7a5b4053",
  measurementId: "G-603FVTV9M1"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();


export default db;