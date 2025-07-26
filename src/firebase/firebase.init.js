// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDXjMUat35tPmVXcekVxNaTfnqyXU2Np4U",
//   authDomain: "volunteer-management-pro-91392.firebaseapp.com",
//   projectId: "volunteer-management-pro-91392",
//   storageBucket: "volunteer-management-pro-91392.firebasestorage.app",
//   messagingSenderId: "168971909169",
//   appId: "1:168971909169:web:74a6e493e96c82c6b0bd10"
// };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);