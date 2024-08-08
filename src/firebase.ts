// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK_velsX0l2hWOEywtUHJfjMjivbSoJHM",
  authDomain: "shop-2e79f.firebaseapp.com",
  projectId: "shop-2e79f",
  storageBucket: "shop-2e79f.appspot.com",
  messagingSenderId: "501657915744",
  appId: "1:501657915744:web:c1ac50fb35421a140d8e05",
  measurementId: "G-YJ43BNST74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);