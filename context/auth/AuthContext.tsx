// Basic Imports
import React, { createContext, useContext, useEffect, useState } from "react";

// Library Imports
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";

// Component Imports
import { auth } from "@/services/firebase";

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
        console.log(user, 999999);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: `${firstName} ${lastName}`,
        }).catch((err) => {
          throw new Error(err);
        });
        await sendEmailVerification(user).catch((err) => {
          throw new Error(err);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ user, signup, login, logout }}>
        {loading ? null : children}
      </AuthContext.Provider>
    </React.Fragment>
  );
};

export default AuthContextProvider;
