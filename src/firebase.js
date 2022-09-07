// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4S45hllUS2gtXqDSvQ87kKXkgSOc6oiI",
  authDomain: "grapplers-guide-4ba39.firebaseapp.com",
  projectId: "grapplers-guide-4ba39",
  storageBucket: "grapplers-guide-4ba39.appspot.com",
  messagingSenderId: "645513081355",
  appId: "1:645513081355:web:15e19131f0f0446f970d0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

function login () {
    return signInWithPopup(auth, provider)
}

function logout () {
    return signOut(auth)
}

export { 
    auth, 
    login, 
    logout,
    onAuthStateChanged 
}