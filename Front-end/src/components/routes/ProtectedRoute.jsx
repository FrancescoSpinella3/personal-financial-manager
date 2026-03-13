import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }) {
    const {isAuthenticated, loading} = useAuth();

    if (loading) {
      return (
        <>
          <Loader2 className="animate-spin size-8" />
        </>
      );
    }

    return isAuthenticated 
      ? children 
      : <Navigate to="/login" replace />
  }