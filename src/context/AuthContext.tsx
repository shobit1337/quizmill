import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebaseConfig";
import { AuthContextType, UserDataType } from "../types/authTypes";

const provider = new GoogleAuthProvider();

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser]: [
    UserDataType,
    React.Dispatch<React.SetStateAction<UserDataType>>
  ] = useState({} as UserDataType);
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = currentUser.uid ? true : false;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      if (user) {
        const userObj = await getDoc(doc(db, `users/${user.uid}`));
        const data = userObj.data();
        if (data) setCurrentUser(data as UserDataType);
      } else {
        setCurrentUser({} as UserDataType);
      }
      setIsLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // If this is new user, add them to firestore
        const isUserPresent = await getDoc(doc(db, "users", result.user.uid));
        if (!isUserPresent.data()) {
          const userDetails: UserDataType = {
            uid: result.user.uid,
            name: result.user.displayName as string,
            email: result.user.email as string,
            photoURL: result.user.photoURL as string,
            quizes: [],
            points: 0,
            friends: [],
            history: [],
          };
          const userRef = await doc(collection(db, "users"), userDetails.uid);
          await setDoc(userRef, {
            ...userDetails,
          });
          setCurrentUser(userDetails);
        }
        toast.success("Logged In Successfully!");
      })
      .catch((error) => {
        console.error("Failed to authenticate with google, ", error);
        toast.error("Failed to authenticate");
      });
  };

  const signup = async (user: any) => {
    await createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => {
        const userRef = doc(collection(db, "users"), result.user.uid);
        const userDetails: UserDataType = {
          uid: result.user.uid,
          name: user.name,
          email: result.user.email as string,
          photoURL: "",
          quizes: [],
          points: 0,
          friends: [],
          history: [],
        };
        setDoc(userRef, {
          ...userDetails,
        });
        toast.success("Signed Up Successfully!");
      })
      .catch((error) => {
        console.error("Failed to signup user, ", error);
        toast.error("Failed to Sign up");
      });
  };

  const signin = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((_) => toast.success("Logged In Successfully!"))
      .catch((error) => {
        console.error("Failed to authenticate email and password, ", error);
        toast.error("Failed to Sign In");
      });
  };

  const signout = async () => {
    localStorage.removeItem("token");
    await signOut(auth).catch((error) => {
      console.error("Failed to signout user, ", error);
      toast.error("Failed to Sign Out");
    });
    toast.success("Logged Out Successfully!");
  };

  const value: AuthContextType = {
    currentUser,
    signup,
    signin,
    signout,
    loginWithGoogle,
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
