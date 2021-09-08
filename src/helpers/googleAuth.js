import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const googleAuth = {
  signIn: function () {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        console.log("you did it");
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        console.log("error code", error.code);
        console.log("error message", error.message);
        console.log("error email", error.email);
      });
  },
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
