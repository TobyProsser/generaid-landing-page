import { initializeApp } from "firebase/app";
import { browserSessionPersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA05WVZw5ft71w0ELhpi7rBm4RI-y-rJOo",
  authDomain: "genconnect-580f2.firebaseapp.com",
  projectId: "genconnect-580f2",
  storageBucket: "genconnect-580f2.firebasestorage.app",
  messagingSenderId: "256199258832",
  appId: "1:256199258832:android:acd5eccfc927d2e4c324d5",
  measurementId: "G-RJW8PWQ4G4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication for React (using browser-based persistence)
export const auth = initializeAuth(app, {
  persistence: browserSessionPersistence, // Keeps user session across refreshes in the browser
});

// Firestore and Storage remain unchanged
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Export current user
export const user = auth.currentUser;
