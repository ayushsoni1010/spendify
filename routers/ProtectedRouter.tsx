import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/auth/AuthContext";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return <React.Fragment>{user ? children : null}</React.Fragment>;
};

export default ProtectedRoutes;
