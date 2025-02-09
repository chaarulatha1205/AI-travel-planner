// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Gl1p_fb3lgXUdQjnW92YSidBLAP56Po",
  authDomain: "ai-travel-planner-6a193.firebaseapp.com",
  projectId: "ai-travel-planner-6a193",
  storageBucket: "ai-travel-planner-6a193.firebasestorage.app",
  messagingSenderId: "149873387786",
  appId: "1:149873387786:web:fb4d57c9bb886c09cdf2f3",
  measurementId: "G-82B41Y3Z97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db;

(async () => {
  const { getFirestore } = await import("firebase/firestore");
  db = getFirestore(app);
})();

export { db };