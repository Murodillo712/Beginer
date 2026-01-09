
import { api } from "@/lib/axios";
import { LoginPayload } from "@/types/auth.types";

import { useMutation } from "@tanstack/react-query";

export async function loginUser(data: LoginPayload) {
    const res = await api.post("/auth", data);
    return res.data;
}

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginPayload) => loginUser(data),
    });
};
