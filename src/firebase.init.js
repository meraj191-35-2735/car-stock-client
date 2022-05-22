import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkBB8II239R8wGw-oDosJvUrqno5fPHMA",
  authDomain: "car-stock-meraj.firebaseapp.com",
  projectId: "car-stock-meraj",
  storageBucket: "car-stock-meraj.appspot.com",
  messagingSenderId: "741891171370",
  appId: "1:741891171370:web:1c9745b69acbd38ae2cf53",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
