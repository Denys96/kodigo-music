import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_TU_API_KEY,
  authDomain: import.meta.env.VITE_TU_PROJECT_DOMAIN,
  projectId: import.meta.env.VITE_TU_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_TU_SENDER_ID,
  appId: import.meta.env.VITE_TU_API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Configura el proveedor de Google
const googleProvider = new GoogleAuthProvider();

// Exporta los métodos que necesitarás
export { 
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut
};