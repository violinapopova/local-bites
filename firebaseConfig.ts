import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp1-yM7MrprDnD74HaC_dQYhRsnmKiwYg",
  authDomain: "localbites-7a650.firebaseapp.com",
  projectId: "localbites-7a650",
  storageBucket: "localbites-7a650.appspot.app",
  messagingSenderId: "819609786792",
  appId: "1:819609786792:web:deff0a94f80f84515ae59d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export { app };
export const db = getFirestore(app);
export const auth = getAuth(app);