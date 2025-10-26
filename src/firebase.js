import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// (valgfrit til senere login hvis I vil): 
// import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'frontend-projekt-98306.firebaseapp.com',
  databaseURL: 'https://frontend-projekt-98306-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'frontend-projekt-98306',
  storageBucket: 'frontend-projekt-98306.appspot.com',
  messagingSenderId: '1046447085483',
  appId: '1:1046447085483:web:84f403e9a7a2de1c2a24ee',
}

export const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)