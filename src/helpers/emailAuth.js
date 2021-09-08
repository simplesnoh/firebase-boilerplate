import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const emailAuth = {
  register: function (userObj) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        console.log("error code", error.code);
        console.log("error message", error.message);
      });
  },
  signIn: function (userObj) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .catch((error) => {
        console.log("error code", error.code);
        console.log("error message", error.message);
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
