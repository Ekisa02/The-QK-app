// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd2WAsCCByRA_tOFTBRXXuc6dqmy0FMOA",
  authDomain: "e-food-c9a3b.firebaseapp.com",
  databaseURL: "https://e-food-c9a3b-default-rtdb.firebaseio.com",
  projectId: "e-food-c9a3b",
  storageBucket: "e-food-c9a3b.firebasestorage.app",
  messagingSenderId: "125459222035",
  appId: "1:125459222035:web:a05b7ae2de594bf61c79e6",
  measurementId: "G-SNP40G10F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Analytics is only available in browser environments. Don't call getAnalytics
// during server-side rendering or in environments where the browser APIs
// (window/document) are not available. Dynamically import the analytics
// package and initialize it only when appropriate.
let analytics = null;

if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  import('firebase/analytics')
    .then(({ getAnalytics }) => {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        // Non-fatal: analytics may not be supported in some browsers/environments
        // Log and continue without analytics.
        console.warn('Firebase analytics is not available:', e);
      }
    })
    .catch((err) => {
      // Failed to load the analytics module — continue without analytics.
      console.warn('Failed to load firebase/analytics module:', err);
    });
}

export { analytics, app };
