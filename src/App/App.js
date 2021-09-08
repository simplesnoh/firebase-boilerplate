import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // use firebase dependency
import "firebase/compat/auth"; // use firebase auth package
import SignIn from "../views/signIn";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // You can use this function to watch to see if a user is authenticated
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        console.log("You Are Authed!");
        setUser(true);
        // // TO DO: To create users on login...
        // // MAKE A QUERY TO THE DB TO SEE IF USER EXISTS
        // // We'll add api calls to FireBase to this later
      } else {
        setUser(null);
        console.log("NO Authenticated User");
        // // TO DO: What ever you think should happen here
      }
    });
  }, []);
  return <>{user ? <h2>Hello</h2> : <SignIn />}</>;
}

export default App;
