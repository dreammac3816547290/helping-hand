// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  documentId,
  where,
  orderBy,
  startAfter,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  limit,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import store from "./store";
import { setUserId } from "../features/user/userSlice";
import {
  getIntangible,
  nextIntangible,
} from "../features/request/intangible/intangibleSlice";
import {
  getTangible,
  nextTangible,
} from "../features/request/tangible/tangibleSlice";

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
const db = getFirestore(app);

export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return setDoc(doc(db, "user", user.uid), {
        add: { tangible: [], intangible: [] },
        follow: { tangible: [], intangible: [] },
      });
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

export function logOut() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    store.dispatch(setUserId(user.uid));
    // ...
  } else {
    // User is signed out
    store.dispatch(setUserId(null)); // remove data?
    // ...
  }
});

export async function getRequestPage(type, id) {
  const docSnap = await getDoc(doc(db, type, id));
  return docSnap.data();
}

export function useFollow(type) {
  const userId = useSelector((state) => state.user.userId);
  const [follow, setFollow] = useState([]);
  useEffect(() => {
    const unsubscribe =
      userId &&
      onSnapshot(doc(db, "user", userId), (doc) =>
        setFollow(doc.data().follow[type])
      );
    return unsubscribe || undefined; // remove follow?
  }, [userId, type]);
  async function changeFollow(requestId) {
    if (userId) {
      const arrayUpdate = follow.includes(requestId) ? arrayRemove : arrayUnion;
      await updateDoc(doc(db, "user", userId), {
        [`follow.${type}`]: arrayUpdate(requestId),
      });
    }
  }
  return [follow, changeFollow];
}

async function getQuery(scope, type, userId, last) {
  const col = collection(db, type);
  const orderById = orderBy(documentId()); // inequality (in) operation first orderBy
  // const order = orderBy("timestamp", "desc");
  const lim = limit(10);
  const args = [/* order, */ lim];
  if (last) {
    args.push(startAfter(last));
  }
  switch (scope) {
    case "public":
      return query(col, ...args);
    case "followed":
      const followed = (await getDoc(doc(db, "user", userId))).data().follow[
        type
      ];
      followed.push("0"); // can't be []
      return query(
        col,
        where(documentId(), "in", followed),
        orderById,
        ...args
      ); // required orderById
    case "self":
      const myRequest = (await getDoc(doc(db, "user", userId))).data().add[
        type
      ];
      myRequest.push("0"); // can't be []
      return query(
        col,
        where(documentId(), "in", myRequest),
        orderById,
        ...args
      ); // required orderById
  }
}

export async function getRequest(scope, type, userId) {
  const q = await getQuery(scope, type, userId, null);
  const querySnapshot = await getDocs(q);
  const request = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    snapshot: doc,
    ...doc.data(),
  }));
  const get = type === "intangible" ? getIntangible : getTangible;
  store.dispatch(get({ scope, request }));
}

export async function nextRequest(scope, type, userId) {
  // getRequest & nextRequest
  const current = store.getState().request[type][scope];
  const last = current[current.length - 1].snapshot;
  const q = await getQuery(scope, type, userId, last);
  const querySnapshot = await getDocs(q);
  const request = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    snapshot: doc,
    ...doc.data(),
  }));
  const next = type === "intangible" ? nextIntangible : nextTangible;
  store.dispatch(next({ scope, request }));
}

// export async function filterRequest(scope, type, userId, predicate) {}

export async function addRequest(type, userId, request) {
  try {
    const docRef = await addDoc(collection(db, type), {
      ...request,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
    await updateDoc(doc(db, "user", userId), {
      [`add.${type}`]: arrayUnion(docRef.id),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function editRequest(type, requestId, request) {
  try {
    await updateDoc(doc(db, type, requestId), request);
    console.log("Document edited with ID: ", requestId);
  } catch (e) {
    console.error("Error editing document: ", e);
  }
}

// export async function getTags() {}
