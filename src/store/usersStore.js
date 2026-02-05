import {create} from "zustand";
import {apiUsers} from "../User/api/api.js";

export const useUsers = create((set) => ({
    users: [],
    loading: true,
    error: null,
    createdUser: [],

    getAllUsers: async () => {
        try {
            set({ loading: true })
            const { data } = await apiUsers.get('/users')
            set({ users: data, loading: false })
        }
        catch (e) {
            console.error(e)
        }
    },
    createUser: (name , username) => set((state) => ({
        users: [
            ...state.users,
            {
                id: Date.now(),
                name: name,
                username: username
            }
        ]
    }))
}))