import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCa87tjYYF7l_L2SwME4CWZI6Z5CO4C4CI",
    authDomain: "nftshop-mascaretti.firebaseapp.com",
    projectId: "nftshop-mascaretti",
    storageBucket: "nftshop-mascaretti.appspot.com",
    messagingSenderId: "522154654906",
    appId: "1:522154654906:web:e736985e330d80f5d99683",
    measurementId: "G-TYY767T2BH"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();