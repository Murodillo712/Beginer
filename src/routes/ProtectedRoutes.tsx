// src/routes/ProtectedRoutes.tsx
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};
