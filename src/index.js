import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/compat/app"; // Import Firebase!!
import { firebaseConfig } from "./apiKeys"; // Import Your Config!!
import "semantic-ui-css/semantic.min.css";
import App from "./App/App";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
