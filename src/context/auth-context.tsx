import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import type { User } from "../lib/types";
import { Loader2 } from "lucide-react";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["user", "me"],
    retry: false,
    queryFn: async () => {
      try {
        const resp = await api.get("/auth/me");
        return resp.data ?? null;
      } catch {
        return null;
      }
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  }

  const values: AuthContextType = {
    user: data,
    isLoading,
    isAuthenticated: !!data,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthContextProvider");
  }
  return ctx;
};
