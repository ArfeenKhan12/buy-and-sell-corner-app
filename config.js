import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

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
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const database = getDatabase(app);