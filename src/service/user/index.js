import { req } from '../axios.config';

export const userAPI = {
    getUser: async (userId) => {
        try {
            const response = await req.get(`/users/${userId}`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    searchUser: async (user_name) => {
        try {
            const response = await req.get(`/users/${user_name}`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getFollowers: async () => {
        try {
            const response = await req.get(`/users/${import.meta.env.VITE_MY_PROFILE}/followers`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    },
    getFollowing: async () => {
        try {
            const response = await req.get(`/users/${import.meta.env.VITE_MY_PROFILE}/following`);
            return response.data;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}