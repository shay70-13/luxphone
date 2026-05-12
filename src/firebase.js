import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqQ8TNOjRHOAdLI2nyrgPvj0lYgjnV6No",
  authDomain: "luxphone-5b9e5.firebaseapp.com",
  projectId: "luxphone-5b9e5",
  storageBucket: "luxphone-5b9e5.firebasestorage.app",
  messagingSenderId: "752457889143",
  appId: "1:752457889143:web:aa6e26ad05f74db3619d72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
