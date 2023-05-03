// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqA8LmTOxHyGKDf5bmqkvNk_BG05ATwI",
  authDomain: "chief-recipe-hunter.firebaseapp.com",
  projectId: "chief-recipe-hunter",
  storageBucket: "chief-recipe-hunter.appspot.com",
  messagingSenderId: "899856466083",
  appId: "1:899856466083:web:45e12682f57a989d01bf16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;