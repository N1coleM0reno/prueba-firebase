// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBLwtbEU8DBVFjoT11xm2BWuUDZT0-l71s",
authDomain: "prueba-firebase-2504.firebaseapp.com",
projectId: "prueba-firebase-2504",
storageBucket: "prueba-firebase-2504.appspot.com",
messagingSenderId: "934737207752",
appId: "1:934737207752:web:1831520c849e48aca3a0fd",
measurementId: "G-MGEHHWMNN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);