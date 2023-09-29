"use client";
import { createContext, useContext, type Context } from "react";
import { type User } from "firebase/auth";

// Auth Context
const AuthContext: Context<User | null | undefined> = createContext<User | null | undefined>(undefined);

// Auth Context Hook
function useAuthContext(): User | null | undefined
{
  return useContext(AuthContext);
}

export default AuthContext;
export { useAuthContext };