// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// <https://firebase.google.com/docs/web/setup#available-libraries>

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eUWqTP02L-wILhAALol-i9XXpxMiScY",
  authDomain: "tsquiz-app.firebaseapp.com",
  projectId: "tsquiz-app",
  storageBucket: "tsquiz-app.appspot.com",
  messagingSenderId: "142395018384",
  appId: "1:142395018384:web:c1d41548c775a114011c15",
  measurementId: "G-BPTZ8S597Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
