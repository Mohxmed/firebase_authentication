import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASeG-xnPCjfSinslCgiq8AxOwRF73ZAII",
  authDomain: "mohxmeduni-5ac9a.firebaseapp.com",
  projectId: "mohxmeduni-5ac9a",
  storageBucket: "mohxmeduni-5ac9a.appspot.com",
  messagingSenderId: "924156107548",
  appId: "1:924156107548:web:f543ebf61fc43d2bca78d9",
  measurementId: "G-CB5X4XKNEY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
