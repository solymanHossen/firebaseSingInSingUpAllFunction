

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFoiTCVqvjBNcu2aq7dnFBBvAE8tAagSM",
  authDomain: "fir-loginlogout-bdd4a.firebaseapp.com",
  projectId: "fir-loginlogout-bdd4a",
  storageBucket: "fir-loginlogout-bdd4a.appspot.com",
  messagingSenderId: "746139734851",
  appId: "1:746139734851:web:ed99f147ac24a4d82a55f6",
  measurementId: "G-DS3FR49LBD"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 
 export default app;