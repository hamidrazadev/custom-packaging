import axiosInstance from "./axios";

export const graphqlClient = async (query, variables = {}) => {
    try {
        const response = await axiosInstance.post("", {
            query,
            variables,
        });

        if (response.data.errors) {
            throw new Error(response.data.errors[0].message);
        }

        return response.data.data;
    } catch (error) {
        throw error;
    }
};