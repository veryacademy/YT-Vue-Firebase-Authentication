import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDDldt5sPlHYsZp6gI_sT3vrPjkihEbT8U",
    authDomain: "vacadquiz.firebaseapp.com",
    projectId: "vacadquiz",
    storageBucket: "vacadquiz.appspot.com",
    messagingSenderId: "21426078384",
    appId: "1:21426078384:web:785faa1efd683afc2c7175",
});

export default firebase;

//https://firebase.google.com/docs/firestore/security/get-started#auth-required