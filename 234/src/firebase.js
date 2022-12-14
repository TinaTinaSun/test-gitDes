// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsmxjMc3otRvAoS1sLHWYyAW-wVQ6P1kE",
    authDomain: "jsdr09-portfolio-6a8bd.firebaseapp.com",
    projectId: "jsdr09-portfolio-6a8bd",
    storageBucket: "jsdr09-portfolio-6a8bd.appspot.com",
    messagingSenderId: "748380930898",
    appId: "1:748380930898:web:9979c56e562b3f9578708b"
};

// Initialize Firebase
// const app = 
initializeApp(firebaseConfig);


const auth = getAuth();

//short name
export const registerNewUser = (email,password) => createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });

export const signInWithEmail = (email,password) => signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(user);
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    });


export const signOutUser = () => signOut(auth)
    .then(()=>{
        console.log('Signed out');

    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    })
