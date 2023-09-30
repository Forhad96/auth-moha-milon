// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBboCDgGhUXJE3LneyqtSacVt-05qS1dqI",
  authDomain: "moha-milon-auth.firebaseapp.com",
  projectId: "moha-milon-auth",
  storageBucket: "moha-milon-auth.appspot.com",
  messagingSenderId: "927058639203",
  appId: "1:927058639203:web:84e8f8074ceec442acfb56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;