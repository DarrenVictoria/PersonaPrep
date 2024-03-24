import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, OAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as firebase from "firebase/app";




const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  appId: process.env.REACT_APP_APP_ID,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  
};



const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  // This callback is necessary to trigger the initialization of persistence
});

const storage = getStorage(app);




export {firebaseConfig ,app, firestore, auth , storage,onAuthStateChanged};

export default app;


// Initialize Provider & Export
export const microsoftProvider = new OAuthProvider('microsoft.com').setCustomParameters({
  login_hint: 'user@nsbm.ac.lk',
  tenant: '9486ac65-39d3-4d25-977c-76d9c31c0046',  // Put Tenant Id from Azure registered app,
  prompt:'consent' // Get Consent from user to access their basic info (optional - Reommended only during SignUp)
})

