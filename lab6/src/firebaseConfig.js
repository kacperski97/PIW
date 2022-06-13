// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF_cvnt7kU3Pbqh6hwz1HmocrwVevBmBY",
  authDomain: "lab6-87ccb.firebaseapp.com",
  projectId: "lab6-87ccb",
  storageBucket: "lab6-87ccb.appspot.com",
  messagingSenderId: "383888304638",
  appId: "1:383888304638:web:93543b5fde2be45183f8af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();