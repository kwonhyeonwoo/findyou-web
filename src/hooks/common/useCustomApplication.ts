import {
    useApplicationMsg,
    useApplicationSaveAsDefault,
    useApplicationOpenLink,
    useApplicationModal,
} from '@/store/useApplicationStore';

export const useCustomApplication = () => {
    const { message, setMessage } = useApplicationMsg();
    const { saveAsDefault, setSelectedSaveDefault } = useApplicationSaveAsDefault();
    const { openLink, setOpenLink } = useApplicationOpenLink();
    const { isModalOpen, setIsModalOpen } = useApplicationModal();

    const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const onLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOpenLink(e.target.value);
    };

    const onSelectedSaveDefault = () => {
        setSelectedSaveDefault(!saveAsDefault);
    };

    return {
        message,
        saveAsDefault,
        openLink,
        isModalOpen,
        onMessageChange,
        onLinkChange,
        onSelectedSaveDefault,
        handleIsOpen: setIsModalOpen,
    };
};
