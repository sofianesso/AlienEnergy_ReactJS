import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHoZJDyL4meLVrt6soO6Y2DlnFmQ8bWRM",
  authDomain: "alienauth.firebaseapp.com",
  projectId: "alienauth",
  storageBucket: "alienauth.appspot.com",
  messagingSenderId: "748022367777",
  appId: "1:748022367777:web:f0ee48dbeec8b9cfe60560"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
