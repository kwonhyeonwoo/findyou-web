import { IMeResponse } from "@/interfaces/auth.interface";
import { create } from "zustand";

interface UserState {
    user: IMeResponse;
    setUser: (user: IMeResponse) => void;
    clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
    user: {
        id: null,
        email: null,
    },
    setUser: (user: IMeResponse) => set({ user }),
    clearUser: () => set({ user: { id: null, email: null } as IMeResponse }),
}))

export const useSetUser = () => {
    const setUser = useUserStore((state) => state.setUser);
    return setUser;
};

export const useClearUser = () => {
    const clearUser = useUserStore((state) => state.clearUser);
    return clearUser;
}