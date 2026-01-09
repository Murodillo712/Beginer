import axios, { AxiosError } from "axios";

console.log("API URL:", import.meta.env.VITE_API_URL);
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        if (error.response?.status === 401) {
            // Token eskirgan bo‘lsa — logout yoki refresh token logikasi shu yerda
            console.warn("Unauthorized — token expired or invalid.");
            localStorage.removeItem("access_token");
            window.location.href = "/login";
        }

        if (error.code === "ECONNABORTED") {
            console.error("Request timeout");
        }

        return Promise.reject(error);
    }
);
