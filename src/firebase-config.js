// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAvk9Z8vx7J50ksC49vs7WI-0Wp4cVK8QQ",
  authDomain: "aliendrink.firebaseapp.com",
  databaseURL: "https://aliendrink-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aliendrink",
  storageBucket: "aliendrink.appspot.com",
  messagingSenderId: "645359974428",
  appId: "1:645359974428:web:e29a10862a8278230207d9"
};

const app = initializeApp(firebaseConfig);

export { app };