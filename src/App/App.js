import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app"; // use firebase dependency
import "firebase/compat/auth"; // use firebase auth package
import SignIn from "../views/signIn";
import Authenticated from "../views/authenticated";

function App() {
  const [user, setUser] = useState(null);

  // I am going to add in logic to set the user and
  // Change the component once I get the api call to
  // googleAuth signIn function to return the user so
  // I can set it in the database

  // Email auth already sets the user, works great!

  // return <>{user ? <Authenticated /> : <SignIn />}</>;
  return <Authenticated />;
}

export default App;
