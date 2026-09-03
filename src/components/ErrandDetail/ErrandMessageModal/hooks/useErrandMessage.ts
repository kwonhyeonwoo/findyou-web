import { useApplicationCreateMutation } from '@/hooks/quires/errand-application/useApplicationCreateMutation';
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
    if (id) {
      mutate({ message, errandId: id as string, saveAsDefault, openLink });
    }
  };

  console.log('openLink', openLink);
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
