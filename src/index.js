import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";

//setting up firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSfl2X3mAHevpvc-62KnHR8V8FZpMZqG8",
  authDomain: "cart-df786.firebaseapp.com",
  projectId: "cart-df786",
  storageBucket: "cart-df786.appspot.com",
  messagingSenderId: "113013317260",
  appId: "1:113013317260:web:f7a36ece247c9e90d4a5a9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
