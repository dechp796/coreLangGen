import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDpMcf-H_x0q3IuGXaqVZQDCEnmS5pY-3o",
    authDomain: "corelanggen.firebaseapp.com",
    projectId: "corelanggen",
    storageBucket: "corelanggen.firebasestorage.app",
    messagingSenderId: "22514940054",
    appId: "1:22514940054:web:869e8ce972a0502752aab7",
    measurementId: "G-BTZ0WHCYQ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDpMcf-H_x0q3IuGXaqVZQDCEnmS5pY-3o",
//   authDomain: "corelanggen.firebaseapp.com",
//   projectId: "corelanggen",
//   storageBucket: "corelanggen.firebasestorage.app",
//   messagingSenderId: "22514940054",
//   appId: "1:22514940054:web:869e8ce972a0502752aab7",
//   measurementId: "G-BTZ0WHCYQ5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);