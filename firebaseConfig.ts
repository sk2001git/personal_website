import { initializeApp }  from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAgldRThhRBQjQ83_ckxogwCbC2N-xscGQ",
  authDomain: "personalwebsite-411306.firebaseapp.com",
  projectId: "personalwebsite-411306",
  storageBucket: "personalwebsite-411306.appspot.com",
  messagingSenderId: "720748456988",
  appId: "1:720748456988:web:bb6444940583ecd947c3d9",
  measurementId: "G-M0RGBWZLCK"
});


export const storage = getStorage();