import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeLOv4sKgSffG2pI9lYsq2fbfWq2Hn6BY",
    authDomain: "crown-db-3884f.firebaseapp.com",
    databaseURL: "https://crown-db-3884f.firebaseio.com",
    projectId: "crown-db-3884f",
    storageBucket: "crown-db-3884f.appspot.com",
    messagingSenderId: "162003671334",
    appId: "1:162003671334:web:2aeea8ee669c29fb9309e7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;