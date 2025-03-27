import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {initializeFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCctgP5ecE353Yjer_9TWVc-kX5PiJ6tjA",
  authDomain: "wp-clone-fb590.firebaseapp.com",
  projectId: "wp-clone-fb590",
  storageBucket: "wp-clone-fb590.firebasestorage.app",
  messagingSenderId: "765292315005",
  appId: "1:765292315005:web:da4790f08c6d5c0f660c14"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, 
    {
        experimentalForceLongPolling: true
    });

// Login
export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

// Registration
export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}