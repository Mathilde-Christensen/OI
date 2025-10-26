import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAI3EVPghGVbjhd8SP2ySFV0ZoeIQJw2rE",
    authDomain: "frontend-projekt-98306.firebaseapp.com",
    databaseURL: "https://frontend-projekt-98306-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "frontend-projekt-98306",
    storageBucket: "frontend-projekt-98306.firebasestorage.app",
    messagingSenderId: "1046447085483",
    appId: "1:1046447085483:web:84f403e9a7a2de1c2a24ee"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Opret forbindelse til Realtime Database
  export const db = getDatabase(app);