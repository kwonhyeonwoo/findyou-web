import { IMeResponse } from "@/interfaces/auth.interface";
import { create } from "zustand";

interface UserState {
    user: IMeResponse;
    setUser: (user: IMeResponse) => void;
    clearUser: () => void;
};

export const useUserStore = create<UserState>((set) => ({
    user: {
        userId: null,
        email: null,
        type: null,
    },
    setUser: (user: IMeResponse) => set({ user }),
    clearUser: () => set({ user: { userId: null, email: null } as IMeResponse }),
}))

export const useSetUser = () => {
    const setUser = useUserStore((state) => state.setUser);
    return setUser;
};

export const useClearUser = () => {
    const clearUser = useUserStore((state) => state.clearUser);
    return clearUser;
}

export const useUser = ()=>{
    const user = useUserStore((state)=>state.user);
    return user;
}