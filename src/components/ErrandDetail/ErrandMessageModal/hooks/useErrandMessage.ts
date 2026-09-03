import { useApplicationCreateMutation } from '@/hooks/mutations/errandApplication/useApplicationCreateMutation';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useErrandMessage = () => {
  const { id } = useParams();
  const [message, setMessage] = useState<string>('');
  const [saveAsDefault, setSaveAsDefault] = useState<boolean>(false);
  const [openLink, setOpenLink] = useState<string>('');
  const { mutate } = useApplicationCreateMutation();

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMessage(value);
  };
  const handleSubmit = () => {
    console.log('save default', saveAsDefault, "openlink", openLink, "id", id)
    if (id) {
      mutate({ message, errandId: id as string, saveAsDefault, openLink });
    }
  };

  const handleSelectBox = () => setSaveAsDefault((prev) => !prev);

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOpenLink(value);
  };
  return {
    message,
    saveAsDefault,
    openLink,
    handleLinkChange,
    handleChangeMessage,
    handleSubmit,
    handleSelectBox,
  };
};
