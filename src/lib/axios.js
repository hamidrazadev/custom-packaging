import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, // GraphQL endpoint from .env
    headers: {
        "Content-Type": "application/json",
    },
});

// Response interceptor (error handling)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;