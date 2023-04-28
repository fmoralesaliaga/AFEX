import { initializeApp } from "firebase/app";
import { getDatabase, ref as sRef, onValue, set} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDz_GI7hZalAvAijuNQV3Ea5pIy41oZEa0",
  authDomain: "afex-candidate.firebaseapp.com",
  databaseURL: "https://afex-candidate-default-rtdb.firebaseio.com",
  projectId: "afex-candidate",
  storageBucket: "afex-candidate.appspot.com",
  messagingSenderId: "542129293570",
  appId: "1:542129293570:web:1e062f1789d715292e1a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {database, sRef, onValue, set}