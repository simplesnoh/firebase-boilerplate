import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

// NOTES!
// googleAuth.signIn() --- 0 params
// googleAuth.signOut() --- 0 params

// SignIn brings up the google sign in pop up AND works
// for both signing in AND registering a user

// SignOut just signs out. This will work for both google
// and email/password sign out.

export const googleAuth = {
  // Works to sign in AND register a user
  signIn: function () {
    return new Promise((res) => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          console.log("you did it");
          const user = userCredential.user;
          res(user);
        })
        .catch((error) => {
          console.log("error code", error.code);
          console.log("error message", error.message);
          console.log("error email", error.email);
        });
    });
  },
  // Sign out a user
  signOut: function () {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sign Out Success!");
      })
      .catch((error) => {
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
};
