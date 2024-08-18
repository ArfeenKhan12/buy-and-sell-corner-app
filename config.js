import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAo6w61vmCiXlegtjSiZyUSYzHZKImeY94",
    authDomain: "buysell-app-2f4a8.firebaseapp.com",
    projectId: "buysell-app-2f4a8",
    storageBucket: "buysell-app-2f4a8.appspot.com",
    messagingSenderId: "952704137123",
    appId: "1:952704137123:web:d5d74beb08f98140bc4c16",
    measurementId: "G-GMZV2FY7KE"
  };

  const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
export  const auth = getAuth(app);
export const db = getFirestore(app);