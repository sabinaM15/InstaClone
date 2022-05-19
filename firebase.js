// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPI7l-zyVouW80VHUEW_r3Km1BefbTeI",
  authDomain: "instaclone-4a415.firebaseapp.com",
  projectId: "instaclone-4a415",
  storageBucket: "instaclone-4a415.appspot.com",
  messagingSenderId: "588786779700",
  appId: "1:588786779700:web:d13e6a76bbfee21fa5ac61"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };