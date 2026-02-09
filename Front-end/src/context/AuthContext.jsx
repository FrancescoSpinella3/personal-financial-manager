import { createContext, useContext, useEffect, useState } from "react";
import { loginUser } from "../services/fakeUserDB";

const AuthContext = createContext();

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Get logged user
    useEffect(() => {        
        const storedUser = localStorage.getItem("loggedUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Login
    const login = (email, password) => {
        const loggedUser = loginUser(email, password);

        // If there is not a logged user, throw an error
        if (!loggedUser) {
            throw new Error("Credenziali non valide");
        }

        // Otherwise add logged user to local storage
        localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
        setUser(loggedUser);
    }

    // Logout
    const logout = () => {
        // Remove user from local storage and set to null
        localStorage.removeItem(loggedUser);
        setUser = null;
    }

    return (
        <AuthContext.Provider
                value={{
                user,
                login,
                logout,
                isAuthenticated: !!user,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}