// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_VXlRwuJxUISZNaN62XK6D60rM2stjnk",
  authDomain: "butlerai-daa46.firebaseapp.com",
  projectId: "butlerai-daa46",
  storageBucket: "butlerai-daa46.firebasestorage.app",
  messagingSenderId: "328869751856",
  appId: "1:328869751856:web:f5f74cd03f45e9302951f5",
  measurementId: "G-FMWKC2Y4N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); // Ensure this is correctly exported
