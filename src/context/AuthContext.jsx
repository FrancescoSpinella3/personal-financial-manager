import { createContext, useContext } from "react";

const AuthContext = createContext();

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

}