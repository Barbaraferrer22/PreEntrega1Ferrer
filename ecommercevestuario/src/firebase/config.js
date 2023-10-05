import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu_h2p9ZWIp0gZS6uBGLbSJybljZfpZYc",
  authDomain: "ecommercevestuario-d6a6f.firebaseapp.com",
  projectId: "ecommercevestuario-d6a6f",
  storageBucket: "ecommercevestuario-d6a6f.appspot.com",
  messagingSenderId: "428042030307",
  appId: "1:428042030307:web:31cc8c1c8c016b3289c9d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
