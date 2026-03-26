import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loader2 } from "lucide-react";

export default function ProtectedRoute({ children }) {
    const {isAuthenticated, loading} = useAuth();

    if (loading) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center">
          <Loader2 className="animate-spin size-14 stroke-3 text-(--main-color)" />
        </div>
      );
    }

    return isAuthenticated 
      ? children 
      : <Navigate to="/login" replace />
  }