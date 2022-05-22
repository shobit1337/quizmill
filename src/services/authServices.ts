import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const getUserData = async (id: string) => {
  const q = query(collection(db, "users"), where("uid", "==", id));
  onSnapshot(q, (data) => {
    return data.docs[0].data();
  });
};
