import { useMemo } from "react";

export function useAuth() {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    return useMemo(
        () => ({
            isAuthenticated: !!token,
            role,
        }),
        [token, role]
    );
}
