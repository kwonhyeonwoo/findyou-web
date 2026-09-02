import { useApplicationCreateMutation } from "@/hooks/quires/errand-application/useApplicationCreateMutation";
import { useParams } from "next/navigation";
import { useState } from "react";

export const useErrandMessage = () => {
    const { id } = useParams();
    const [message, setMessage] = useState<string>('');
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [link, setLink] = useState<string>("");
    const { mutate } = useApplicationCreateMutation();

    const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setMessage(value);
    };
    const handleSubmit = () => {
        if (id) {
            mutate({ message, errandId: id as string });
        }
    };

    const handleSelectBox = () => setIsSelected((prev) => !prev);

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setLink(value);
    }
    return {
        message,
        isSelected,
        link,
        handleLinkChange,
        handleChangeMessage,
        handleSubmit,
        handleSelectBox
    }
}