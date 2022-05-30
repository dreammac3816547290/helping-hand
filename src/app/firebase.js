// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { useDispatch } from "react-redux";
import { getIntangible } from "../features/request/intangible/intangibleSlice";
import { getTangible } from "../features/request/tangible/tangibleSlice";
import { setUserId } from "../features/user/userSlice";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuzSb779gUQ-pVnrsd9kDGOE1EEVCYY3I",
  authDomain: "helping-hand-6f39f.firebaseapp.com",
  projectId: "helping-hand-6f39f",
  storageBucket: "helping-hand-6f39f.appspot.com",
  messagingSenderId: "1003373003346",
  appId: "1:1003373003346:web:4c6e2c43a9e5ec7fca158b",
  measurementId: "G-LTFRS8M4LL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const dispatch = useDispatch();
    dispatch(setUserId(uid));
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const db = getFirestore(app);

export function getFirebaseIntangible() {
  db.collection("intangible")
    .get()
    .then((querySnapshot) => {
      const dispatch = useDispatch();
      dispatch(
        getIntangible(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      );
      //   querySnapshot.forEach((doc) => {
      //     console.log(`${doc.id} => ${doc.data()}`);
      //   });
    });
}

export function addIntangible(request) {
  db.collection("intangible")
    .add(request)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      getFirebaseIntangible();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

export function getFirebaseTangible() {
  db.collection("tangible")
    .get()
    .then((querySnapshot) => {
      const dispatch = useDispatch();
      dispatch(
        getTangible(
          querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )
      );
      //   querySnapshot.forEach((doc) => {
      //     console.log(`${doc.id} => ${doc.data()}`);
      //   });
    });
}

export function addTangible(request) {
  db.collection("tangible")
    .add(request)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      getFirebaseTangible();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
