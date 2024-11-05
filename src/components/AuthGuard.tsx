import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { AuthGuardTypes } from "@/types/authentication/authGuardTypes.d";

const AuthGuard = ({ children }: AuthGuardTypes) => {
  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get("http://localhost:8081/auth/validate-token", {
          withCredentials: true,
        });
      } catch (error: unknown) {
        if (error instanceof Error && axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            router.push("/auth/login");
          }
        }
      }
    };

    verifyToken();
  }, [router]);

  return <>{children}</>;
};

export default AuthGuard;
