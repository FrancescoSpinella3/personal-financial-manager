import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, updateUser } from "../services/fakeUserDB";

const AuthContext = createContext();

// Custom hook
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
        console.log('Login effettuato con successo')
    }

    // Logout
    const logout = () => {
        // Remove user from local storage and set to null
        localStorage.removeItem("loggedUser");
        setUser(null);
        console.log('Logout effettuato con successo')
    }

    // Update profile
    const updateProfile = (updates) => {
        if (!user) throw new Error("Nessun utente loggato");
        const updated = updateUser(user.id, updates);
        localStorage.setItem("loggedUser", JSON.stringify(updated));
        setUser(updated);
        return updated;
    }

    return (
        <AuthContext.Provider
                value={{
                user,
                login,
                logout,
                updateProfile,
                isAuthenticated: !!user,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}