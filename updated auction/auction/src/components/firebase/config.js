import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWQ1E9RZ5ijlXvXmQ4DqDMJhlNWTuYyuI",
  authDomain: "uneeb-auction.firebaseapp.com",
  projectId: "uneeb-auction",
  storageBucket: "uneeb-auction.appspot.com",
  messagingSenderId: "856164580314",
  appId: "1:856164580314:web:c629fe0e426b5840f05ee3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;