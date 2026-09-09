import { create } from "zustand";

interface ApplicationStore {
    message: string;
    saveAsDefault: boolean;
    openLink: string;
    isModalOpen: boolean;
    setIsModalOpen: () => void;
    setMessage: (message: string) => void;
    setSelectedSaveDefault: (savsaveAsDefaulte: boolean) => void;
    setOpenLink: (openLink: string) => void
}

export const useApplicationStore = create<ApplicationStore>((set) => ({
    message: "",
    saveAsDefault: false,
    openLink: "",
    isModalOpen: false,
    setIsModalOpen: () =>
        set((state) => {
            const isModalOpen = !state.isModalOpen;
            if (isModalOpen) return { isModalOpen };
            return {
                isModalOpen,
                message: "",
                saveAsDefault: false,
                openLink: "",
            };
        }),
    setMessage: (message: string) => set({ message }),
    setSelectedSaveDefault: (saveAsDefault: boolean) => set({ saveAsDefault }),
    setOpenLink: (openLink: string) => set({ openLink })
}));

export const useApplicationMsg = () => {
    const message = useApplicationStore((state) => state.message);
    const setMessage = useApplicationStore((state) => state.setMessage);
    return {
        message,
        setMessage,
    }
};

export const useApplicationSaveAsDefault = () => {
    const saveAsDefault = useApplicationStore((state) => state.saveAsDefault);
    const setSelectedSaveDefault = useApplicationStore((state) => state.setSelectedSaveDefault);
    return {
        saveAsDefault,
        setSelectedSaveDefault
    }
};

export const useApplicationOpenLink = () => {
    const openLink = useApplicationStore((state) => state.openLink);
    const setOpenLink = useApplicationStore((state) => state.setOpenLink);
    return {
        openLink,
        setOpenLink,
    }
};

export const useApplicationModal = () => {
    const isModalOpen = useApplicationStore((state) => state.isModalOpen);
    const setIsModalOpen = useApplicationStore((state) => state.setIsModalOpen);
    return {
        isModalOpen,
        setIsModalOpen
    }
}