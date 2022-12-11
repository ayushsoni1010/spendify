// Basic Imports
import React, { createContext, useContext, useEffect, useState } from "react";

// Library Imports
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
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