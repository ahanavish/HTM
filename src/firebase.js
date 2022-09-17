import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAei6WApQ2LdBOA9LYiKCxIYQ3Wfw_pfdo",
  authDomain: "medsbay-aeb90.firebaseapp.com",
  projectId: "medsbay-aeb90",
  storageBucket: "medsbay-aeb90.appspot.com",
  messagingSenderId: "1016579754851",
  appId: "1:1016579754851:web:09e91d7aaecc769ac62156"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}