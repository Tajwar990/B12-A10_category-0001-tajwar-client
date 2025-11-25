// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_c8sSrl3OQZ4wIGGA2kcQjCLppND-N4U",
  authDomain: "b12-a10-c-1-tajwar-client.firebaseapp.com",
  projectId: "b12-a10-c-1-tajwar-client",
  storageBucket: "b12-a10-c-1-tajwar-client.firebasestorage.app",
  messagingSenderId: "930942997872",
  appId: "1:930942997872:web:29f8f99022ba5e1ed7ebb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
